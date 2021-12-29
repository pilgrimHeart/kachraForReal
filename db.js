const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/auth'
mongoose.Promise = global.Promise
mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log('database connected successfully')
  })
  .catch(() => {
    console.log('cant connect to the server')
  })
