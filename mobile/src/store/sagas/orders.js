import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import OrdersActions from '~/store/ducks/orders';

export function* loadOrders() {
  try {
    const response = yield call(api.get, 'orders');

    yield put(OrdersActions.loadOrdersSuccess(response.data));
  } catch (err) {
    yield put(OrdersActions.loadOrdersFailure());
  }
}
