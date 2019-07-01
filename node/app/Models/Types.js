'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Types extends Model {
  product () {
    return this.belongsTo('App/Models/Products')
  }
  sizes () {
    return this.belongsToMany('App/Models/Sizes')
      .pivotTable('sizes_types')
      .withPivot(['price', 'id'])
  }
}

module.exports = Types
