
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('examples').del()
    .then(function () {
      // Inserts seed entries
      return knex('examples').insert([
        {id:55001, question:'How do I make a branch and commit to that new branch?', description:'branch much?', topic_id:9902},
        {id:55002, question:'How do I cli?', description:'?', topic_id:9901},
        {id:55003, question:'How do I js?', description:'??', topic_id:9903},
        {id:55004, question:'How do I heroku?', description:'???', topic_id:9904},
        {id:55005, question:'How do I react?', description:'????', topic_id:9905},
        {id:55006, question:'How do I npm?', description:'?????', topic_id:9906}
      ]);
    });
};
