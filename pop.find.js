const model = require('./models/class')
const model1 = require('./models/student')

const founder = async (req, res) => {
  try {
    let check = await model.find()
    res.send({ check })
  } catch (error) {
    console.log(error)
  }
}
const founder1 = async (req, res) => {
  try {
    let check = await model1.find()
    res.send({ check })
  } catch (error) {
    console.log(error)
  }
}

///update class
const updateClass = async (req, res) => {
  let update = await model.updateOne(
    { id: req.params.id },
    { $push: { students: req.body.studentId } },
    { new: true }
  )

  res.json(update)
}
module.exports = { founder, updateClass, founder1 }
