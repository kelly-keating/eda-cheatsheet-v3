
exports.seed = function(knex, Promise) {
  return knex('sections').del()
    .then(function () {
      return knex('sections').insert([
        {id: 660001, paragraph: 'paragraph mcblurble 1', example_id: 55001},
        {id: 660002, paragraph: 'paragraph mcblurble 2', example_id: 55001},
        {id: 660003, paragraph: 'paragraph mcblurble 3', example_id: 55001}
      ]);
    });
};
