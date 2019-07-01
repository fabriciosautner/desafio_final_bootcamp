import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  authSignin: ['email', 'password'],
  authSignup: ['email', 'password', 'name'],
  authSuccess: ['token'],
  authFailure: null,
  authSignout: null,
  initCheckSuccess: null,
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  authChecked: false,
  signedIn: false,
  token: null,
  loading: false,
  error: false,
});

/* Reducers */

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_SIGNIN]: state => state.merge({ loading: true, error: false }),
  [Types.AUTH_SIGNUP]: state => state.merge({ loading: true, error: false }),
  [Types.AUTH_SUCCESS]: (state, { token }) => state.merge({ token, loading: false, error: false }),
  [Types.AUTH_FAILURE]: state => state.merge({ loading: false, error: true }),
  [Types.INIT_CHECK_SUCCESS]: state => state.merge({ authChecked: true }),
  [Types.AUTH_SIGNOUT]: state => state.merge({ token: null, loading: false, error: false, email: null }),
});
