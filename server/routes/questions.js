var express = require('express')
var router = express.Router()

var db = require('../db')


router.post('/', (req, res) => {
  db.addQuestion(req.body, req.app.get('knex'))
    .then((result) => {
      res.json(result)
    })
})

router.get('/all', (req, res) => {
  db.getAllQuestions(req.app.get('knex'))
    .then((result) => {
      res.json(result)
    })
})

router.put('/one', (req, res) => {
  db.updateOneQuestion(req.body, req.app.get('knex'))
    .then((result) => {
      res.json(result)
    })
})

module.exports = router
