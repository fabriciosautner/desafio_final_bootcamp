'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Orders extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }
  orderItems () {
    return this.hasMany('App/Models/OrderItems')
  }
}

module.exports = Orders
