var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/topic/:id', (req, res) => {
  db.getExamples(req.params.id, req.app.get('knex'))
    .then((result) => {
      res.json(result)
    })
})

router.get('/sections/:id', (req, res) => {
  db.getSections(req.params.id, req.app.get('knex'))
    .then((result) => {
      res.json(result)
    })
})

router.get('/code/:id', (req, res) => {
  db.getCodeFromSection(req.params.id, req.app.get('knex'))
    .then((result) => {
      res.json(result)
    })
})

module.exports = router
