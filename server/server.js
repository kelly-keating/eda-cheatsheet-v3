var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')

var topics = require('./routes/topics')
var code = require('./routes/code')
var examples = require('./routes/examples')

const corsOptions = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  credentials: true
}

var server = express()
server.use(cors(corsOptions))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/topics', topics)
server.use('/api/code', code)
server.use('/api/examples', examples)

module.exports = server
