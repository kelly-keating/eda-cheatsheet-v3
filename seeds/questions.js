
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {id:4400001, content:'How do I do a javascript', up_vote:7, down_vote:0},
        {id:4400002, content:'React???', up_vote:2, down_vote:3}
      ]);
    });
};
