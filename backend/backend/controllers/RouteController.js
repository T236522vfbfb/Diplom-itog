import cors from 'cors';
import {
  toRouteItems,
  getDateCriteria,
  getPriceCriteria,
  getBoolPropsCriteria,
  getSortAttribute,
  toSeats
} from '../helpers/route';
import Controller from './Controller';

class RouteController extends Controller {
  register() {
    const app = this.app.express;
    app.get('/routes', cors(), this.safeAction(this.actionRoutes));
    app.get('/routes/:id/seats', cors(), this.safeAction(this.actionSeats));
    app.get('/routes/cities', cors(), this.safeAction(this.actionCities));
    app.get('/routes/last', cors(), this.safeAction(this.actionLastRoutes));
  }

  async actionLastRoutes(req, res) {
    const { Route } = this.app.db.models;
    
    try {
      const routes = await Route.find({})
        .populate('train')
        .populate('from_city')
        .populate('to_city')
        .populate('from_railway_station')
        .populate('to_railway_station')
        .limit(5)
        .sort('_id DESC');
        
      const items = toRouteItems(routes);
      return res.send(items);
    } catch (error) {
      return res.status(500).send({ error: 'Ошибка при получении последних маршрутов', details: error.message });
    }
  }

  async actionSeats(req, res) {
    const { params } = req,
      { id } = params;

    if (!id || typeof id !== 'string') {
      return res.status(400).send({
        error: 'Поле id обязательно для заполнения и должно быть строкой'
      });
    }

    const { Route, Train } = this.app.db.models;

    try {
      const route = await Route.findOne({ _id: id }).populate('bought_seats');
      if (!route) {
        return res.status(404).send({ error: 'Направление не найдено' });
      }

      const train = await Train.findOne({ _id: route.train }).populate('coaches');
      const seats = toSeats(route, train, req.query);
      return res.send(seats);
      
    } catch (error) {
      return res.status(500).send({ error: 'Ошибка при получении мест', details: error.message });
    }
  }

  async actionRoutes(req, res) {
    const { query } = req;
    
    const {
      from_city_id: fromCityId,
      to_city_id: toCityId,
      date_start: dateStart,
      date_end: dateEnd,
      price_from: priceFrom,
      price_to: priceTo,
      offset = 0,
      sort = 'date'
    } = query;

    if (!fromCityId || !toCityId) {
      return res.status(400).send({
        error: 'Поля from_city_id и to_city_id обязательны для заполнения'
      });
    }

    const { Route } = this.app.db.models;
    
    const fromAttributes = { from_city: fromCityId, to_city: toCityId };
    
    if (dateStart) {
      fromAttributes.date_depart = getDateCriteria(
        dateStart,
        query.start_departure_hour_from,
        query.start_departure_hour_to
      );
    }

    if (query.date_start_arrival) {
      fromAttributes.date_arrival = getDateCriteria(
        query.date_start_arrival,
        query.start_arrival_hour_from,
        query.start_arrival_hour_to
      );
    }

    if (priceFrom || priceTo) {
      fromAttributes.min_price = getPriceCriteria(priceFrom, priceTo);
    }

    Object.assign(fromAttributes, getBoolPropsCriteria(query));

    try {
      const fromData = await Route.find(fromAttributes)
          .populate('train')
          .populate('from_city')
          .populate('to_city')
          .populate('from_railway_station')
          .populate('to_railway_station')
          .skip(offset)
          .limit(Math.min(20, query.limit || 5))
          .sort(getSortAttribute(sort));

      const fromTotalCount = await Route.count(fromAttributes);

      if (dateEnd) {
        const toAttributes = { from_city: toCityId, to_city: fromCityId };

        if (priceFrom || priceTo) {
          toAttributes.min_price = getPriceCriteria(priceFrom, priceTo);
        }

        toAttributes.date_depart = getDateCriteria(
          dateEnd,
          query.end_departure_hour_from,
          query.end_departure_hour_to
        );

        if (query.date_end_arrival) {
          toAttributes.date_arrival = getDateCriteria(
            query.date_end_arrival,
            query.end_arrival_hour_from,
            query.end_arrival_hour_to
          );
        }

        Object.assign(toAttributes, getBoolPropsCriteria(query));

        const toData = await Route.find(toAttributes)
            .populate('train')
            .populate('from_city')
            .populate('to_city')
            .populate('from_railway_station')
            .populate('to_railway_station')
            .skip(offset)
            .limit(Math.min(20, query.limit || 5))
            .sort(getSortAttribute(sort));

        const toTotalCount = await Route.count(toAttributes);

        results.total_count = Math.min(fromTotalCount, toTotalCount);
        results.items = results.total_count > 0 ? toRouteItems(fromData, toData) : [];
        
      } else {
        results.total_count = fromTotalCount;
        results.items = results.total_count > 0 ? toRouteItems(fromData) : [];
      }
      
      return res.send(results);

    } catch (error) {
      return res.status(500).send({ error: 'Ошибка при получении маршрутов', details: error.message });
    }
  }

  async actionCities(req, res) {
    const { name } = req.query;

    if (!name) {
      return res.status(400).send({
        error: 'Поле name обязательно для заполнения'
      });
    }

    const { City } = this.app.db.models;

    try {
      const data = await City.find({
        name: { contains: name.toLowerCase() }
      }).limit(10);

      return res.send(data);
      
    } catch (error) {
      return res.status(500).send({ error: 'Ошибка при получении городов', details: error.message });
    }
  }
}

export default RouteController;