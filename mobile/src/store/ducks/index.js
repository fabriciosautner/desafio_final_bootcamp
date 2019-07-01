import { combineReducers } from 'redux';

import { reducer as auth } from './auth';
import { reducer as products } from './products';
import { reducer as types } from './types';
import { reducer as sizes } from './sizes';
import { reducer as cart } from './cart';
import { reducer as orders } from './orders';

export default combineReducers({
  auth,
  products,
  types,
  sizes,
  cart,
  orders,
});
