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

const add = mongoose.model('token', userSchema)
module.exports = add
