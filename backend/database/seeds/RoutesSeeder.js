import moment from 'moment';
import { compose, pluck, identity, sum, prop, map, zipObj } from 'ramda';
import Seeder from './Seeder';

const rand = (min, max) => Math.round(Math.random() * (max - min) + min);

class RoutesSeeder extends Seeder {
  static MAX_ROUTES = 10000;
  static TRAINS_COUNT = 500;
  static MAX_CITIES_LIMIT = 10;

  async run() {
    const { db } = this,
      Route = db.collections.route,
      City = db.collections.city,
      Train = db.collections.train,
      { MAX_ROUTES, TRAINS_COUNT, MAX_CITIES_LIMIT } = this.constructor;

    const cities = await City.find({})
      .limit(MAX_CITIES_LIMIT)
      .populate('railway_stations');

    const getRandomCity = exclude => {
      let source = cities;
      if (exclude) {
        source = cities.filter(item => item._id !== exclude._id);
      }
      return source[rand(0, source.length - 1)];
    };

    const getRandomRailwayStation = city => {
      const { railway_stations: railwayStations } = city;
      return railwayStations[rand(0, railwayStations.length - 1)];
    };

    const getRandomTrain = async () => {
      const skip = rand(0, TRAINS_COUNT - 1);
      const trains = await Train.find({
        have_coaches: true,
      }).populate('coaches').limit(1).skip(skip);

      if (trains.length === 0) {
        console.warn('Нет доступных поездов.');
        return null; 
      }

      return trains.pop();
    };

    const getAvailableSeats = compose(
      sum,
      map(prop('available_seats')),
    );

    await Route.destroy({});
    const date = new Date();
    const currentYear = date.getFullYear();

    for (let year of [currentYear - 1, currentYear, currentYear + 1, currentYear + 2]) {
      for (let monthNumber = 0; monthNumber < 12; monthNumber++) { 
        for (let i = 0; i < MAX_ROUTES; i++) {
          const progress = Math.floor((i + 1) * 100 / MAX_ROUTES);
          process.stdout.write(`\r\bprogress: ${progress}%`);
          try {
            const train = await getRandomTrain();
            if (!train) continue; 

            const { coaches } = train;
            const checkCoachesForProp = prop => coaches.some(coach => coach[prop] === true);
            const checkCoachesForClass = classType => coaches.some(coach => coach.class_type === classType);

            const getClassMinPrice = classType => {
              const classCoaches = coaches.filter(item => item.class_type === classType);
              const minPropValue = prop => Math.min(...pluck(prop, classCoaches));
              const priceProps = ['price', 'top_price', 'bottom_price', 'side_price'];
              return priceProps.reduce((target, prop) => {
                const value = minPropValue(prop);
                if (value > 0) {
                  target[prop] = value; 
                }
                return target;
              }, {});
            };

            const getMinPrice = data => {
              const toValues = data => Object.values(data).filter(identity);
              return Math.min(
                ...toValues(data).map(item => Math.min(...toValues(item))),
              );
            };

            const getSeatsInfo = priceInfo => {
              const classList = Object.entries(priceInfo)
                .filter(([key, value]) => value)
                .map(([key]) => key);
              const getCoachesByClass = classType => coaches.filter(item => item.class_type === classType);
              const getAvailableSeatsByClass = compose(getAvailableSeats, getCoachesByClass);
              
              return zipObj(
                classList,
                classList.map(getAvailableSeatsByClass),
              );
            };

            const haveFirstClass = checkCoachesForClass('first');
            const haveSecondClass = checkCoachesForClass('second');
            const haveThirdClass = checkCoachesForClass('third');
            const haveFourthClass = checkCoachesForClass('fourth');

            const dateDepart = moment()
              .year(year)
              .month(monthNumber)
              .add(rand(0, 40), 'days')
              .add(rand(0, 50), 'hours')
              .add(rand(0, 120), 'minutes');

            const dateArrival = dateDepart.clone()
              .add(rand(0, 3), 'days')
              .add(rand(1, 50), 'hours')
              .add(rand(10, 120), 'minutes');

            const fromCity = getRandomCity();
            const toCity = getRandomCity(fromCity);
            const fromRailwayStation = getRandomRailwayStation(fromCity);
            const toRailwayStation = getRandomRailwayStation(toCity);

            const attributes = {
              from_city: fromCity._id,
              to_city: toCity._id,
              from_railway_station: fromRailwayStation._id,
              to_railway_station: toRailwayStation._id,
              train: train._id,
              have_first_class: haveFirstClass,
              have_second_class: haveSecondClass,
              have_third_class: haveThirdClass,
              have_fourth_class: haveFourthClass,
              date_depart: dateDepart.unix(), 
              date_arrival: dateArrival.unix(), 
              duration: Math.round((dateArrival - dateDepart) / 1000),
              have_wifi: checkCoachesForProp('have_wifi'),
              have_air_conditioning: checkCoachesForProp('have_air_conditioning'),
              is_express: checkCoachesForProp('is_express'),
              price_info: {
                first: haveFirstClass && getClassMinPrice('first'),
                second: haveSecondClass && getClassMinPrice('second'),
                third: haveThirdClass && getClassMinPrice('third'),
                fourth: haveFourthClass && getClassMinPrice('fourth'),
              },
              available_seats: getAvailableSeats(coaches),
            };

            attributes.min_price = getMinPrice(attributes.price_info);
            attributes.available_seats_info = getSeatsInfo(attributes.price_info);

            await Route.create(attributes);
          } catch (error) {
            console.error(error);
          }
        }
        process.stdout.write('\n');
      }
    }
  }
}

export default RoutesSeeder;
