
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('codeToSections').del()
    .then(function () {
      // Inserts seed entries
      return knex('codeToSections').insert([
        {id: 770001, section_id: 660001, code_id:88203, index: 0},
        {id: 770002, section_id: 660002, code_id:88206, index: 1},
        {id: 770003, section_id: 660002, code_id:88208, index: 2},
        {id: 770004, section_id: 660003, code_id:88209, index: 3},
        {id: 770005, section_id: 660004, code_id:88101, index: 0},
        {id: 770006, section_id: 660005, code_id:88301, index: 0},
        {id: 770007, section_id: 660006, code_id:88401, index: 0},
        {id: 770008, section_id: 660007, code_id:88501, index: 0},
        {id: 770009, section_id: 660008, code_id:88601, index: 0}
      ]);
    });
};
