const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    username: { type: String },
    password: { type: String },
  },
  { timestamps: true }
)

const submit = mongoose.model('token', userSchema)
module.exports = submit
