var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/all', (req, res) => {
  db.getAllQuestions(req.app.get('knex'))
    .then((result) => {
      res.json(result)
    })
})

module.exports = router
