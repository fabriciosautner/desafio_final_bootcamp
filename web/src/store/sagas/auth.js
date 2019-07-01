import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import api from 'services/api';

import AuthActions from 'store/ducks/auth';

export function* signin({ email, password }) {
  try {
    const headerParams = {
      device: 'web',
    };
    const body = {
      email,
      password,
    };
    const response = yield call(api.post, '/sessions', body, { headers: headerParams });

    localStorage.setItem('@Pizza:token', response.data.token.token);
    localStorage.setItem('@Pizza:name', response.data.user.name);

    yield put(AuthActions.authSuccess(response.data.token.token, response.data.user.name));
    yield put(push('/'));
  } catch (err) {
    yield put(AuthActions.authFailure());
  }
}

export function* logoff() {
  try {
    localStorage.clear();

    yield put(AuthActions.authLogoffSuccess());

    yield put(push('/signin'));
  } catch (err) {
    yield put(AuthActions.authFailure());
  }
}
