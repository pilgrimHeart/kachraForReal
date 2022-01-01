const model = require('../models/Model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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
  //here Register New user
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
//here login going on
const login = async (req, res) => {
  console.log(req.body)
  try {
    let check = await model.findOne({ email: req.body.email })
    if (check) {
      let result = await bcrypt.compare(req.body.password, check.password)
      if (!result) {
        console.log('password not matching')
        return res.status(401).json({
          msg: 'password matching fail',
        })
      } else {
        const token = await jwt.sign(
          {
            username: model.username,
            email: model.email,
          },
          'this is dummy text',
          {
            expiresIn: '24h',
          }
        )
        res.status(200).json({
          username: model.username,
          email: model.email,
          token: token,
        })
        console.log('email matched')
      }
    } else {
      console.log('email not matched')
      return res.status(401).json({
        msg: 'email mot matched',
      })
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = { register, login }
