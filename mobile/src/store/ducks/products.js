import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadProductsRequest: null,
  loadProductsSuccess: ['products'],
  loadProductsFailure: null,
});

export const ProductsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
});

/* Reducers */

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_PRODUCTS_SUCCESS]: (state, { products }) => state.merge({ data: products, loading: false }),
  [Types.LOAD_PRODUCTS_REQUEST]: state => state.merge({ loading: true }),
});
