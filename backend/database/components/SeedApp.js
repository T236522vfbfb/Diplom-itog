import seeders from '../seeds/index';
import Db from '../../backend/components/Db';

class SeedApp {
  constructor(config) {
    this._config = config;
  }

  initDb() {
    const db = new Db(this._config.db);
    this.db = db;
    return db.connect();
  }

  async seed(dbInstance) {
    const seedersList = Object.values(seeders);
    for (let Seeder of seedersList) {
      const { name } = Seeder;
      console.log(`Starting Seeder: ${name}`);

      const seeder = new Seeder(dbInstance);
      await seeder.run();

      console.log(`Ending Seeder: ${name}`);
    }
  }

  async run() {
    try {
      const dbInstance = await this.initDb();
      await this.seed(dbInstance);
    } catch (error) {
      console.error('Ошибка при запуске SeedApp:', error);
    }
  }
}

export default SeedApp;