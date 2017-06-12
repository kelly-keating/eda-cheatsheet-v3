
exports.up = function (knex, Promise) {
  return knex.schema.createTable('topics', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.text('description')
    table.string('alias')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('topics')
}
