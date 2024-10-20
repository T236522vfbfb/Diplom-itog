import { props, identity, filter, compose, flatten } from 'ramda';
import Controller from './Controller';
import cors from 'cors';
import { toSeats } from '../helpers/order';

class OrderController extends Controller {
  register() {
    const app = this.app.express;
    app.post('/order', cors(), this.safeAction(this.actionOrder));
  }

  async actionOrder(req, res) {
    const { body } = req,
      { Seat } = this.app.db.models;

    const { departure, arrival } = body;
    if (!Array.isArray(departure) || !Array.isArray(arrival)) {
      return res.status(400).send({ error: 'Invalid data format: departure and arrival must be arrays' });
    }

    const processRequest = compose(
      toSeats,
      flatten,
      filter(identity),
      props(['departure', 'arrival'])
    );

    const seatsData = processRequest(body);

    if (!Array.isArray(seatsData) || seatsData.length === 0) {
      return res.status(400).send({ error: 'No valid seat data provided' });
    }

    for (let attributes of seatsData) {
      try {
        await Seat.create(attributes);
      } catch (error) {
        return res.status(500).send({ error: 'Failed to create seat', details: error.message });
      }
    }

    return res.send({
      status: true
    });
  }
}

export default OrderController;