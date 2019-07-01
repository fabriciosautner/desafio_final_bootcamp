import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from 'store/ducks/auth';
import { OrdersTypes } from 'store/ducks/orders';

import { signin, logoff } from './auth';
import { loadOrders } from './orders';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.AUTH_SIGNIN, signin),
    takeLatest(AuthTypes.AUTH_LOGOFF_REQUEST, logoff),
    takeLatest(OrdersTypes.LOAD_ORDERS_REQUEST, loadOrders),
  ]);
}
