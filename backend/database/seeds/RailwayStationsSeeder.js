import data from '../data/railway-stations';
import Seeder from './Seeder';

class RailwayStationsSeeder extends Seeder {
  async run() {
    try {
      const { db } = this,
            City = db.collections.city,
            RailwayStation = db.collections.railwaystation;

      await RailwayStation.destroy({});
      
      for (let item of data) {
        const city = await City.findOne({
          name: item.city.toLowerCase()
        });

        if (!city) {
          console.warn(`Город "${item.city}" не найден. Пропускаем...`);
          continue; 
        }

        await RailwayStation.create({
          name: item.name,
          city: city._id
        });
      }
    } catch (error) {
      console.error('Ошибка при выполнении сидера:', error);
    }
  }
}

export default RailwayStationsSeeder;
