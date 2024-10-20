import Waterline from 'waterline';

const RailwayStation = Waterline.Collection.extend({
  identity: 'railwaystation',
  datastore: 'default', 
  primaryKey: '_id',
  attributes: {
    _id: {
      type: 'string' 
    },
    name: {
      type: 'string',
      required: true 
    },

    city: {
      model: 'city' 
    }
  }
});

export default RailwayStation;
