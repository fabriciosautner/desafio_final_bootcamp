'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', table => {
      table.increments()
      table.decimal('amount', 15, 2).notNullable()
      table.string('cep', 8).notNullable()
      table.string('street').notNullable()
      table.string('number', 10).notNullable()
      table.string('district', 50).notNullable()
      table.string('note', 2044).notNullable()
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .boolean('delivered')
        .notNullable()
        .defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema
