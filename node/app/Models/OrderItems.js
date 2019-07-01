'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrderItems extends Model {
  sizesTypes () {
    return this.belongsTo('App/Models/SizesTypes')
  }
}

module.exports = OrderItems
