import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import SizesActions from '~/store/ducks/sizes';

export function* loadSizes({ idType }) {
  try {
    const response = yield call(api.get, `types/${idType}/sizes`);

    yield put(SizesActions.loadSizesSuccess(response.data.sizes));
  } catch (err) {
    yield put(SizesActions.loadSizesFailure());
  }
}
