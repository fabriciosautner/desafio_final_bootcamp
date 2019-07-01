'use strict'

const Size = use('App/Models/Size')
/**
 * Resourceful controller for interacting with sizes
 */
class SizeController {
  /**
   * Show a list of all sizes.
   * GET sizes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const sizes = await Size.all()

    return sizes
  }

  /**
   * Render a form to be used for creating a new size.
   * GET sizes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {}

  /**
   * Create/save a new size.
   * POST sizes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['description'])

    const size = Size.create(data)

    return size
  }

  /**
   * Display a single size.
   * GET sizes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {}

  /**
   * Render a form to update an existing size.
   * GET sizes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {}

  /**
   * Update size details.
   * PUT or PATCH sizes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const data = request.only(['description'])

    const size = await Size.query()
      .where('id', params.id)
      .first()

    size.merge(data)

    await size.save()

    return size
  }

  /**
   * Delete a size with id.
   * DELETE sizes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const size = await Size.query()
      .where('id', params.id)
      .first()

    await size.delete()
  }
}

module.exports = SizeController
