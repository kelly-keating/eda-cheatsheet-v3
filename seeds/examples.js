
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('examples').del()
    .then(function () {
      // Inserts seed entries
      return knex('examples').insert([
        {id:55001, question:'How do I make a branch and commit to that branch?', description:'branch much?', topic_id:9902}
      ]);
    });
};
