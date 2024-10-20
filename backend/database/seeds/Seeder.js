class Seeder {
  constructor(db) {
    if (!db) {
      throw new Error('База данных не инициализирована');
    }
    this.db = db;
  }

  async run() {
    try {
      console.log('Запуск сидера...');
    } catch (error) {
      console.error('Ошибка при выполнении сидера:', error);
    }
  }
}

export default Seeder;
