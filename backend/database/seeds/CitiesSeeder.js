import { pluck, uniq } from 'ramda';
import data from '../data/railway-stations';
import Seeder from './Seeder';

class CitiesSeeder extends Seeder {
  async run() {
    try {
      const { db } = this,
        City = db.collections.city,
        cityNames = uniq(pluck('city', data));

      await City.destroy({});
      for (let name of cityNames) {
        await City.create({
          name: name.toLowerCase()
        });
      }
    } catch (error) {
      console.error('Ошибка при выполнении сидера:', error);
    }
  }
}

export default CitiesSeeder;
