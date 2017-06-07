
exports.up = function (knex, Promise) {
  return knex.schema.createTable('sections', function (table) {
    table.increments('id').primary()
    table.text('paragraph')
    table.integer('example_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('sections')
}
