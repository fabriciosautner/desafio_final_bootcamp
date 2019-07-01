'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sizes extends Model {
  types () {
    return this.belongsToMany('App/Models/Types').pivotTable('sizes_types')
  }
}

module.exports = Sizes
