const model = require('./models/student')

const finder = async (req, res) => {
  try {
    let check = await model.find()
    res.send({ check })
  } catch (error) {
    console.log(error)
  }
}
module.exports = {finder}
