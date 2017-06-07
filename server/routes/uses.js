var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', (req, res) => {
  db.getUses(req.app.get('knex'))
    .then((result) => {
      res.json(result)
    })
})

router.get('/use/:id', (req, res) => {
  db.getUse(req.params.id, req.app.get('knex'))
    .then((result) => {
      res.json(result)
    })
})

router.get('/code/:id', (req, res) => {
  db.getCodeFromQuestion(req.params.id, req.app.get('knex'))
    .then((result) => {
      res.json(result)
    })
})

module.exports = router
