import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadSizesRequest: ['idType'],
  loadSizesSuccess: ['sizes'],
  loadSizesFailure: null,
});

export const SizesTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
});

/* Reducers */

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SIZES_SUCCESS]: (state, { sizes }) => state.merge({ data: sizes, loading: false }),
  [Types.LOAD_SIZES_REQUEST]: state => state.merge({ loading: true }),
});
