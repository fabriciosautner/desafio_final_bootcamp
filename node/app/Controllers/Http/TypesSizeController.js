'use strict'

const Types = use('App/Models/Types')

class TypesSizeController {
  async index ({ request, response, params }) {
    const type = await Types.findOrFail(params.types_id)
    await type.load('sizes')
    return type
  }
}

module.exports = TypesSizeController
