'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SizesTypes extends Model {
  types () {
    return this.belongsTo('App/Models/Types')
  }
  sizes () {
    return this.belongsTo('App/Models/Sizes')
  }
  orderItems () {
    return this.hasMany('App/Models/OrderItems')
  }
}

module.exports = SizesTypes
