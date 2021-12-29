const model = require('../models/Model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
//register user here
const register = async function (req, res) {
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
  let user = new model({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  })
  console.log(req.body)
  user.save()
  res.json(user)
}
/////login////
const login = async (res, req) => {
  let checkUser = await model.findOne({ email: req.body.email })
  if (checkUser < 1) {
    console.log('email account not found')
  }
  bcrypt.compare(req.body.password, model.password[0], (result) => {
    if (!result) {
      res.send('password matching fail')
    }
    if (result) {
      const token = jwt.sign(
        {
          username: model[0].username,
          email: model[0].email,
        },

        {
          expiresIn: '24h',
        }
      )
      res.status(200).json({
        username: employeeModel[0].username,
        email: employeeModel[0].email,
        token: token,
      })
    }
  })
}
module.exports = { register, login }
