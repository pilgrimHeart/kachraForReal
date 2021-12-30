const express = require('express')
const port = 3000
const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

require('./routes/route')(server)

server.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('server is running on ', port)
  }
})
