'use strict'

const Order = use('App/Models/Order')
const OrderItem = use('App/Models/OrderItems')

/**
 * Resourceful controller for interacting with orders
 */
class OrderController {
  /**
   * Show a list of all orders.
   * GET orders
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, params }) {
    const orders = await Order.query()
      .where('delivered', false)
      .orderBy('id', 'desc')
      .with('user')
      .with('orderItems.sizesTypes.sizes')
      .with('orderItems.sizesTypes.types')
      .fetch()

    return orders
  }

  /**
   * Render a form to be used for creating a new order.
   * GET orders/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {}

  /**
   * Create/save a new order.
   * POST orders
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const details = request.only([
      'amount',
      'cep',
      'district',
      'note',
      'number',
      'street'
    ])
    const arrayItems = request.only(['items'])

    const detailsOrder = { ...details, user_id: auth.user.id }

    const order = await Order.create(detailsOrder)
    arrayItems.items.map(async item => {
      await OrderItem.create({
        order_id: order.id,
        price: item.price,
        sizes_type_id: item.product
      })
    })

    return response.status(200).send({ message: 'Pedido criado com sucesso!' })
  }

  /**
   * Display a single order.
   * GET orders/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {}

  /**
   * Render a form to update an existing order.
   * GET orders/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {}

  /**
   * Update order details.
   * PUT or PATCH orders/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {}

  /**
   * Delete a order with id.
   * DELETE orders/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {}
}

module.exports = OrderController
