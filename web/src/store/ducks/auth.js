import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  authSignin: ['email', 'password'],
  authSuccess: ['token', 'name'],
  authFailure: null,
  authSignout: null,
  authLogoffRequest: null,
  authLogoffSuccess: null,
  initCheckSuccess: null,
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  authChecked: false,
  signedIn: !!localStorage.getItem('@Pizza:token'),
  token: localStorage.getItem('@Pizza:token') || null,
  loading: false,
  error: false,
  name: localStorage.getItem('@Pizza:name') || null,
});

/* Reducers */
export const success = (state, { token, name }) => state.merge({
  token,
  signedIn: true,
  loading: false,
  error: false,
  name,
});

export const logoff = state => state.merge({
  token: null,
  signedIn: false,
  loading: false,
  error: false,
  name: null,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_SIGNIN]: state => state.merge({ loading: true, error: false }),
  [Types.AUTH_SUCCESS]: success,
  [Types.AUTH_LOGOFF_SUCCESS]: logoff,
  [Types.AUTH_FAILURE]: state => state.merge({ loading: false, error: true }),
  [Types.INIT_CHECK_SUCCESS]: state => state.merge({ authChecked: true }),
  [Types.AUTH_SIGNOUT]: state => state.merge({ loading: false, error: false, email: null }),
});
