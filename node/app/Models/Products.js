'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Products extends Model {
  types () {
    return this.hasMany('App/Models/Types')
  }
}

module.exports = Products
