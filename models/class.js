const mongoose = require('mongoose')
const classSchema = new mongoose.Schema({
  name: { type: String },
  schoolname: { type: String },
  students:[{type:'ObjectId',ref:'students'}]
})
const add = mongoose.model('classes', classSchema)
module.exports = add
