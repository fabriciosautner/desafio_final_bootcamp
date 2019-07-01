import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadOrdersRequest: null,
  loadOrdersSuccess: ['orders'],
  loadOrdersFailure: null,
});

export const OrdersTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  empty: true,
});

/* Reducers */

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_ORDERS_SUCCESS]: (state, { orders }) => state.merge({ data: orders, loading: false, empty: false }),
  [Types.LOAD_ORDERS_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_ORDERS_FAILURE]: state => state.merge({ loading: false, empty: true }),
});
