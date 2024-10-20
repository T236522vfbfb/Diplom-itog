import App from './components/SeedApp';
import config from '../backend/config';

const app = new App(config);

try {
  app.run();
} catch (error) {
  console.error('Ошибка при запуске приложения:', error);
}