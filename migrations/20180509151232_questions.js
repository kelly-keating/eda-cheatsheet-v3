
exports.up = function (knex, Promise) {
  return knex.schema.createTable('questions', function (table) {
    table.increments('id').primary()
    table.text('content')
    table.integer('up_vote')
    table.integer('down_vote')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('questions')
}
