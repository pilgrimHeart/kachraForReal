const mongoose = require('mongoose')
const classSchema = new mongoose.Schema({
  name: { type: String },
  schoolname: { type: String },
})
const add = mongoose.model('classes', classSchema)
module.exports = add
