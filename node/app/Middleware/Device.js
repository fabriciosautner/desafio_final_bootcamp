'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User')

class Device {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    const email = request.input('email')
    const device = request.header('DEVICE')

    const user = await User.query()
      .where('email', email)
      .select('is_admin')
      .first()

    if (
      (device === 'mobile' && user.is_admin === 'true') ||
      (device === 'web' && user.is_admin === 'false')
    ) {
      return response
        .status(401)
        .send({ message: 'You are not authorized to log in' })
    }

    await next()
  }
}

module.exports = Device
