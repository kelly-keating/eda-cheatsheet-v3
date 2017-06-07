
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 88101, section_id: 660001, code_id:88203, index: 0},
        {id: 88102, section_id: 660002, code_id:88206, index: 1},
        {id: 88103, section_id: 660002, code_id:88208, index: 2},
        {id: 88103, section_id: 660003, code_id:88209, index: 3}
      ]);
    });
};
