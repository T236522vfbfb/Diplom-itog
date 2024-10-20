import moment from 'moment';
import { times, uniq, compose, dec } from 'ramda';
import Seeder from './Seeder';
import { toSeconds } from '../../backend/helpers/route';

const rand = (min, max) => Math.round(
  Math.random() * (max - min) + min
),
boolRand = compose(Boolean, Math.round, Math.random);

class SeatsSeeder extends Seeder {
  static MAX_SEATS = 5;
  static ROUTES_COUNT = 5000;

  async run() {
    try {
      const { db } = this,
        Coach = db.collections.coach,
        Route = db.collections.route,
        Seat = db.collections.seat,
        { MAX_SEATS, ROUTES_COUNT } = this.constructor;

      const getRandomRoute = async skip => {
        const routes = await Route.find({})
          .limit(1)
          .skip(skip);
        return routes.pop();
      };

      await Seat.destroy({});
      
      for (let i = 0; i < ROUTES_COUNT; i++) {
        const progress = Math.floor((i + 1) * 100 / ROUTES_COUNT);
        process.stdout.write(`\r\bprogress: ${progress}%`);

        const route = await getRandomRoute(i);
        
        if (!route) {
          console.warn(`Маршрут с индексом ${i} не найден.`);
          continue; 
        }

        const { train, _id } = route,
              coaches = await Coach.find({ train });

        for (let coach of coaches) {
          const getRandomIndex = () => {
            if (coach.available_seats <= 0) return null;
            return rand(0, coach.available_seats);
          };

          const indexes = uniq(
            times(getRandomIndex, MAX_SEATS * 2)
          ).slice(0, MAX_SEATS);

          for (let index of indexes) {
            if (index === null) continue; 
            
            const attributes = {
              index,
              route: _id,
              train,
              coach: coach._id,
              is_child: boolRand(),
              is_wifi_included: boolRand(),
              is_linens_included: boolRand(),
              datetime: toSeconds(moment()
                .add(rand(-10, 10), 'days')
                .add(rand(-10, 10), 'hours')
                .add(rand(-10, 10), 'minutes'))
            };

            await Seat.create(attributes);
            
            await Route.update({ _id })
              .set({ available_seats: dec(route.available_seats) });
            
            await Coach.update({ _id: coach._id })
              .set({ available_seats: dec(coach.available_seats) });
          }
        }
      }
      process.stdout.write('\n');
    } catch (error) {
      console.error('Ошибка при выполнении сидера:', error);
    }
  }
}

export default SeatsSeeder;