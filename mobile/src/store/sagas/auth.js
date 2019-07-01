import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { navigate } from '~/services/navigation';
import AsyncStorage from '@react-native-community/async-storage';

import AuthActions from '~/store/ducks/auth';

export function* init() {
  const token = yield AsyncStorage.getItem('@Pizza:token');

  if (token) {
    yield put(AuthActions.authSuccess(token));
  }

  yield put(AuthActions.initCheckSuccess());
}

export function* signin({ email, password }) {
  try {
    const headerParams = {
      device: 'mobile',
    };
    const body = {
      email,
      password,
    };
    const response = yield call(api.post, 'sessions', body, { headers: headerParams });
    yield put(AuthActions.authSuccess(response.data.token.token));
    yield AsyncStorage.setItem('@Pizza:token', response.data.token.token);
    navigate('Main');
  } catch (err) {
    yield put(AuthActions.authFailure());
  }
}

export function* signout() {
  try {
    yield AsyncStorage.removeItem('@Pizza:token');
    navigate('Login');
  } catch (err) {
    yield put(AuthActions.authFailure());
  }
}

export function* signup({ email, password, name }) {
  try {
    const body = {
      email,
      password,
      password_confirmation: password,
      name,
    };
    const response = yield call(api.post, 'users', body);
    yield put(AuthActions.authSuccess(response.data.token));
    yield AsyncStorage.setItem('@Pizza:token', response.data.token);
    navigate('Main');
  } catch (err) {
    yield put(AuthActions.authFailure());
  }
}
