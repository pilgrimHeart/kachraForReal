const mongoose = require('mongoose')
const teacherSchema = new mongoose.Schema({
  name: { type: String },
  subject: { type: String },
})
const add = mongoose.model('teachers', teacherSchema)
module.exports = add
