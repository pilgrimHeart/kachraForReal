const model = require('../models/Model')
const bcrypt = require('bcrypt')

//register user here
const register = async (req, res) => {
  ///hash password///

  const salt = await bcrypt.genSalt(10)
  req.body.password = await bcrypt.hash(req.body.password, salt)
  //check user exist or not

  const checkuser = await model.findOne({ email: req.body.email })
  if (checkuser) {
    console.log('user already existed')
    return res.status(409).send('User Already Exist. Please Login')
  }
  //here create user
  let user = await new model({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    token: '',
  })
  console.log(req.body)
  user.save()
  res.json(user)
}

module.exports = { register }
