const mongoose = require('mongoose')
const AddressSchema = new mongoose.Schema(
  {
    village: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
  },
  { timestamps: true }
)

const add = mongoose.model('addresses', AddressSchema)
module.exports = add
