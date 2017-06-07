
exports.up = function (knex, Promise) {
  return knex.schema.createTable('examples', function (table) {
    table.increments('id').primary()
    table.text('question')
    table.text('description')
    table.integer('topic_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('examples')
}
