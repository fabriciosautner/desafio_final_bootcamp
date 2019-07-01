'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderItemsSchema extends Schema {
  up () {
    this.create('order_items', table => {
      table.increments()
      table.decimal('price', 15, 2).notNullable()
      table
        .integer('order_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('orders')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('sizes_type_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('sizes_types')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('order_items')
  }
}

module.exports = OrderItemsSchema
