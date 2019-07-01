'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.resource('products', 'ProductController').apiOnly()
Route.resource('products.types', 'ProductsTypeController').apiOnly()

Route.resource('types', 'TypeController').apiOnly()
Route.resource('types.sizes', 'TypesSizeController').apiOnly()

Route.resource('sizes', 'SizeController').apiOnly()

Route.group(() => {
  Route.resource('orders', 'OrderController').apiOnly()
}).middleware('auth')

Route.post('users', 'UserController.store').validator('User')
Route.resource('users.orders', 'UsersOrderController').apiOnly()

Route.post('sessions', 'SessionController.store')
  .validator('Session')
  .middleware('device')
