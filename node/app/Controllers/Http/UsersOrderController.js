'use strict'

const Order = use('App/Models/Order')

class UsersOrderController {
  async index ({ request, response, params }) {
    const orders = await Order.query()
      .where({ user_id: params.users_id })
      .fetch()

    return orders
  }
}

module.exports = UsersOrderController
