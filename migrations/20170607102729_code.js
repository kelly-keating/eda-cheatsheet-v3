
exports.up = function (knex, Promise) {
  return knex.schema.createTable('code', function (table) {
    table.increments('id').primary()
    table.text('text')
    table.text('description')
    table.integer('topic_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('code')
}
