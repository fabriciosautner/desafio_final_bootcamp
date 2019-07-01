import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as auth } from './auth';
import { reducer as orders } from './orders';

export default history => combineReducers({
  auth,
  orders,
  router: connectRouter(history),
});
