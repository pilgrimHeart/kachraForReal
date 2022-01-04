const mongoose = require('mongoose')

const schoolSchema = new mongoose.Schema({
  schoolename: { type: String },
  schooladdress: { type: String },
  schoolType: { type: String },
})
let add = mongoose.model('schools', schoolSchema)
module.exports = add
