var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')

var topics = require('./routes/topics')
var code = require('./routes/code')
var examples = require('./routes/examples')

var {SLACK_URL} = require('../secrets')

const corsOptions = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  credentials: true
}

var server = express()

var request = require('superagent')
server.use(cors(corsOptions))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/topics', topics)
server.use('/api/code', code)
server.use('/api/examples', examples)

server.post('/api/slack', (req, res) => {
  request
    .post(SLACK_URL)
    .set({'Content-type': 'application/json'})
    .send({ text: req.body.text })
    .end((err, res) => {
      if (err) {
        console.log({err});
      } else {
        console.log('ok!');
      }
    })
})

module.exports = server
