import Controller from './Controller';
import cors from 'cors';

class SubscribeController extends Controller {
  register() {
    const app = this.app.express;
    app.post('/subscribe', cors(), this.actionSubscribe.bind(this));
  }

  async actionSubscribe(req, res) {
    const { email } = req.body; 

    if (!email) {
      return res.status(400).send({
        error: 'Поле email обязательно для заполнения'
      });
    }

    try {
      
      return res.send({
        status: true
      });
    } catch (error) {
      return res.status(500).send({
        error: 'Произошла ошибка при подписке',
        details: error.message
      });
    }
  }
}

export default SubscribeController;