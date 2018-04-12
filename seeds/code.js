
exports.seed = function(knex, Promise) {
  return knex('code').del()
    .then(function () {
      return knex('code').insert([
        // {id: 88, topic_id: 990, text: '', description:''},
          //  CMD LINE
          {id: 88101, topic_id: 9901, text: 'killall node', description: 'Will stop any node server running. Useful when attempting to launch server but port is used by another function that you could swear isn\'t actually running right now.'},
          //  GIT
          {id: 88201, topic_id: 9902, text: 'git login', description: 'Will prompt you for your login to github.'},
          {id: 88202, topic_id: 9902, text: 'git clone https://www.github.com/USERNAME/REPO', description: 'Get a working copy of a repository on your computer.'},
          {id: 88203, topic_id: 9902, text: 'git remote -v', description: 'Get a list of the external remotes of your current repo.'},
          {id: 88204, topic_id: 9902, text: 'git remote set-url origin https://github.com/USERNAME/REPOSITORY.git', description: 'Change the origin remote of your repo.'},
          {id: 88205, topic_id: 9902, text: 'git checkout -b my-branch', description: 'Create a branch (-b) and move to that branch.'},
          {id: 88206, topic_id: 9902, text: 'git branch', description: 'Will list all the branches that exist on your computer and show you the one you are currently on.'},
          {id: 88207, topic_id: 9902, text: 'git status', description: 'Shows the differences between what is saved your work area and what has been commited to git.'},
          {id: 88208, topic_id: 9902, text: 'git add .', description: 'Will look for any changes in the files, using the one you are in (.) as a base, and add them to be committed. Can use -A instead of . as it specifies all files instead of just those under the current folder'},
          {id: 88209, topic_id: 9902, text: 'git commit -m "some message"', description: 'Logs the commit and it\'s message to HEAD but doesn\'t tell github about it yet.'},
          {id: 88210, topic_id: 9902, text: 'git commit -am "my message"', description: 'Will forgo the add step and assume there are no new/deleted files.'},
          {id: 88211, topic_id: 9902, text: 'git push origin my-branch', description: 'Sends the changes to github along with a log of the commits.'},
          // set upstream
          {id: 88212, topic_id: 9902, text: 'git fetch origin', description: 'Refreshes your branches from origin.'},
          {id: 88213, topic_id: 9902, text: 'git branch -a', description: 'Finds all available branches (including from other people\'s branches from github).'},
          {id: 88214, topic_id: 9902, text: 'git pull', description:''},
          {id: 88215, topic_id: 9902, text: 'git pull origin my-branch', description:''},
          {id: 88216, topic_id: 9902, text: 'git log', description: 'Shows a log of commits made.'},
          {id: 88217, topic_id: 9902, text: 'git log -p', description: 'Shows a log of commits made, plus details of what changed in the files.'},
          {id: 88218, topic_id: 9902, text: 'git checkout HEAD~1', description: 'Moves to the previous commit on your branch. Changing the number will dictate how far back you go (ie. HEAD~5 will go back 5 commits).'},
          {id: 88219, topic_id: 9902, text: 'git stash', description:''},
          //  JS
          {id: 88301, topic_id: 9903, text: 'typeOf ______', description: 'Will return the primitive type (string, number, object, etc.) of whatever it is called on.'},
          //filter
          //map
          //  HEROKU
          {id: 88401, topic_id: 9904, text: 'heroku apps', description: 'Shows a list of all youe apps currently in your Heroku account.'},
          {id: 88402, topic_id: 9904, text: 'heroku create APP_NAME', description: 'Creates a new app on heroku. The name is optional.'},
          {id: 88403, topic_id: 9904, text: 'heroku git:remote APP_NAME', description: 'Sets the git remote (called heroku) to your app.'},
          {id: 88404, topic_id: 9904, text: 'heroku rollback', description: 'Returns your heroku server to the previous state before you pushed.'},
          //  REACT
          {id: 88501, topic_id: 9905, text: 'React.render(<h1>Hello, world!</h1>)', description: 'Render draws the thing on the thing - sends the html to load into the view'},
          //  NPM
          {id: 88901, topic_id: 9909, text: 'knex migrate:make MIGRATION_NAME', description: 'Creates a new migration.'},
          {id: 88902, topic_id: 9909, text: 'knex migrate:latest', description: 'Runs all not yet migrated migrations to create your database tables.'},
          {id: 88903, topic_id: 9909, text: 'knex seed:run', description: 'Fills your database table with information.'}
    ])
  })
}
