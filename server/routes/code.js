var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/:topic', (req, res) => {
  console.log(req.params.topic);
  db.listCode(req.params.topic, req.app.get('knex'))
    .then((result) => {
      console.log({result});
      res.json(result)
    })
})

router.get('/:id', (req, res) => {
  db.getCode(req.params.id, req.app.get('knex'))
    .then((result) => {
      res.json(result)
    })
})

module.exports = router
