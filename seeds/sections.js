
exports.seed = function(knex, Promise) {
  return knex('sections').del()
    .then(function () {
      return knex('sections').insert([
        {id: 660001, paragraph: 'paragraph mcblurble 1', example_id: 55001},
        {id: 660002, paragraph: 'paragraph mcblurble 2', example_id: 55001},
        {id: 660003, paragraph: 'paragraph mcblurble 3', example_id: 55001},
        {id: 660004, paragraph: 'cli paragraph', example_id: 55002},
        {id: 660005, paragraph: 'js paragraph', example_id: 55003},
        {id: 660006, paragraph: 'heroku paragraph', example_id: 55004},
        {id: 660007, paragraph: 'react paragraph', example_id: 55005},
        {id: 660008, paragraph: 'npm paragraph', example_id: 55006}
      ]);
    });
};
