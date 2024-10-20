'use strict';

import config from './config.js';
import App from './components/App.js'; 

const app = new App(config);

try {
  app.run();
} catch (error) {
  console.error('Ошибка при запуске приложения:', error);
}