import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { navigate } from '~/services/navigation';

import CartActions from '~/store/ducks/cart';

export function* addItem({ item }) {
  try {
    yield put(CartActions.addItemTemp(item));
  } catch (err) {
    console.tron.log(err);
  }
}

export function* sendOrder({ order, items, total }) {
  try {
    const body = {
      ...order,
      amount: total,
      items,
    };

    console.tron.log(body);

    yield call(api.post, 'orders', body);

    yield put(CartActions.sendOrderSuccess());

    navigate('History');
  } catch (err) {
    yield put(CartActions.sendOrderFailure());
  }
}
