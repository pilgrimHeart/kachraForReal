const express = require('express')
const port = 3000
const server = express()
const database = require('./db')
const bodyParser = require('body-parser')
const controller = require('./controllers/pureFunction')
const auth = require('./controllers/test')

const router = require('./routes/route')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use('/', router)

server.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('server is running on ', port)
  }
})
