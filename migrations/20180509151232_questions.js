
exports.up = function (knex, Promise) {
  return knex.schema.createTable('questions', function (table) {
    table.increments('id').primary()
    table.text('content')
    table.integer('up_vote').defaultTo(0)
    table.integer('down_vote').defaultTo(0)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('questions')
}
