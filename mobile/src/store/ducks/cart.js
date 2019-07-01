import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  addItemCart: ['product'],
  removeItemCart: ['idProduct'],
  addItemTempRequest: ['item'],
  addItemTemp: ['item'],
  sendOrderRequest: ['order', 'items', 'total'],
  sendOrderSuccess: null,
  sendOrderFailure: null,
});

export const CartTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  itemAdd: {},
  cartEmpty: true,
  error: false,
  sending: false,
});

/* Reducers */

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_ITEM_CART]: (state, { product }) => state.merge({
    data: [...state.data, product],
    cartEmpty: false,
  }),
  [Types.ADD_ITEM_TEMP]: (state, { item }) => state.merge({
    itemAdd: item,
  }),
  [Types.REMOVE_ITEM_CART]: (state, { idProduct }) => state.merge({
    data: state.data.filter(item => item.product !== idProduct),
    cartEmpty: state.data.length <= 1,
  }),
  [Types.SEND_ORDER_REQUEST]: state => state.merge({
    sending: true,
    error: false,
  }),
  [Types.SEND_ORDER_REQUEST]: state => state.merge({
    sending: false,
    error: true,
  }),
  [Types.SEND_ORDER_SUCCESS]: state => state.merge({
    cartEmpty: true,
    itemAdd: {},
    data: [],
    sending: false,
    error: false,
  }),
});
