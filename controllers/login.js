const mongoose = require('mongoose')
const model = require('../models/Model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

///loginss
const login = (req, res) => {
 
  try {
    model
      .find({ username: req.body.username }) //this thing is not working req.body{}
      .exec()
      .then((model) => {
        if (model.length === 0) {
          return res.status(401).json({
            msg: 'user not exist',
          })
        }

        bcrypt.compare(req.body.password, model.password, (result) => {
          if (!result) {
            return res.status(401).json({
              msg: 'password matching fail',
            })
          }
          if (result) {
            const token = jwt.sign(
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
          }
        })
      })
  } catch (error) {
    console.log(error)
  }
}

const user = async (req, res) => {
  try {
    let bearerHeader = await req.header['Authorization']

    let bearer = await bearerHeader.split('')
    if (typeof bearerHeader !== undefined) {
    } else {
      res.send({ result: 'token not provide' })
    }
  } catch (error) {
    console.log(error)
  }
}
module.exports = { login }
