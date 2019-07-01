import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import ProductsActions from '~/store/ducks/products';

export function* loadProducts() {
  try {
    const response = yield call(api.get, 'products');

    yield put(ProductsActions.loadProductsSuccess(response.data));
  } catch (err) {
    yield put(ProductsActions.loadProductsFailure());
  }
}
