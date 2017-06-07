
exports.seed = function(knex, Promise) {
  return knex('topics').del()
    .then(function () {
      return knex('topics').insert([
        {id: 9901, alias: 'cmdLine', name: 'Command Line', description: 'Command Line code for Linux machines.'},
        {id: 9902, alias: 'git', name: 'git', description: 'the shiz'},
        {id: 9903, alias: 'js', name: 'JavaScript', description: 'magic'},
        {id: 9904, alias: 'heroku', name: 'Heroku', description: 'tis I'},
        {id: 9905, alias: 'react', name: 'React', description: 'invisible magic'},
        {id: 9909, alias: 'npm', name: 'Packages', description: 'bundles of joy'}
      ])
    })
}
