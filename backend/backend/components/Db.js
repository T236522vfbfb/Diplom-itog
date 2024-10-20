import Waterline from 'waterline';
import models from '../models/index';

class Db {
  constructor(config) {
    this._config = config;
    this._waterline = new Waterline();

    this.registerModels();
  }

  registerModels() {
    const waterline = this._waterline;
    Object.values(models).forEach(model => {
      if (typeof model === 'object') { 
        waterline.registerModel(model);
      } else {
        console.warn('Некорректная модель:', model);
      }
    });
  }

  get models() {
    if (!this._db) {
      throw new Error('Database not connected'); 
    }

    const { collections } = this._db;
    this._models = Object.keys(collections).reduce((target, collectionName) => {
      const modelName = Object.keys(models)
        .find(name => name.toLowerCase() === collectionName);
      if (modelName) { 
        target[modelName] = collections[collectionName];
      }
      return target;
    }, {});

    return this._models;
  }

  connect() {
    return new Promise((resolve, reject) =>
      this._waterline.initialize(this._config, (err, db) => {
        if (err) {
          console.error('Ошибка подключения к базе данных:', err); 
          return reject(err);
        }
        this._db = db;
        resolve(db);
      })
    );
  }
}

export default Db;