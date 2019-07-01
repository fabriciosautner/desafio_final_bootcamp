import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import TypesActions from '~/store/ducks/types';

export function* loadTypes({ idProduct }) {
  try {
    const response = yield call(api.get, `products/${idProduct}/types`);

    yield put(TypesActions.loadTypesSuccess(response.data.types));
  } catch (err) {
    yield put(TypesActions.loadTypesFailure());
  }
}
