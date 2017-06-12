
exports.up = function (knex, Promise) {
  return knex.schema.createTable('codeToSections', function (table) {
    table.increments('id').primary()
    table.integer('code_id')
    table.integer('section_id')
    table.integer('index')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('codeToSections')
}
