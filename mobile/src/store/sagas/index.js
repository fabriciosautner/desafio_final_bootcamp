import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '~/store/ducks/auth';
import { ProductsTypes } from '~/store/ducks/products';
import { TypesTypes } from '~/store/ducks/types';
import { SizesTypes } from '~/store/ducks/sizes';
import { CartTypes } from '~/store/ducks/cart';
import { OrdersTypes } from '~/store/ducks/orders';

import { init, signin, signout, signup } from './auth';
import { loadProducts } from './products';
import { loadTypes } from './types';
import { loadSizes } from './sizes';
import { addItem, sendOrder } from './cart';
import { loadOrders } from './orders';

export default function* rootSaga() {
  return yield all([
    init(),
    takeLatest(AuthTypes.AUTH_SIGNIN, signin),
    takeLatest(AuthTypes.AUTH_SIGNUP, signup),
    takeLatest(AuthTypes.AUTH_SIGNOUT, signout),
    takeLatest(ProductsTypes.LOAD_PRODUCTS_REQUEST, loadProducts),
    takeLatest(TypesTypes.LOAD_TYPES_REQUEST, loadTypes),
    takeLatest(SizesTypes.LOAD_SIZES_REQUEST, loadSizes),
    takeLatest(CartTypes.ADD_ITEM_TEMP_REQUEST, addItem),
    takeLatest(CartTypes.SEND_ORDER_REQUEST, sendOrder),
    takeLatest(OrdersTypes.LOAD_ORDERS_REQUEST, loadOrders),
  ]);
}
