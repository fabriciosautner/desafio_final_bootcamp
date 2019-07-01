import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadTypesRequest: ['idProduct'],
  loadTypesSuccess: ['types'],
  loadTypesFailure: null,
});

export const TypesTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
});

/* Reducers */

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_TYPES_SUCCESS]: (state, { types }) => state.merge({ data: types, loading: false }),
  [Types.LOAD_TYPES_REQUEST]: state => state.merge({ loading: true }),
});
