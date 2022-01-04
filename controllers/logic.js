const student = require('../models/student')
const tutor = require('../models/teacher')
const address = require('../models/address')
const classes = require('../models/class')
const schools = require('../models/schools')
///////////////////////////////
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
//REGISTER HERE
const students = async (req, res) => {
  const salt = await bcrypt.genSalt(10)
  req.body.password = await bcrypt.hash(req.body.password, salt)
  const checkuser = await student.findOne({ email: req.body.email })
  if (checkuser) {
    console.log('user already existed')
    return res.status(409).send('User Already Exist. Please Login')
  }
  ///SUBMIT
  let user = await new student({
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
    let check = await student.findOne({ email: req.body.email })

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
            email: student.email,
          },
          'this is dummy text',
          {
            expiresIn: '20sec',
          }
        )
        res.status(200).json({
          username: student.username,
          email: student.email,
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
//ADD ADDRESSS///
const addAddress = async (req, res) => {
  let place = await new address({
    village: req.body.village,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
  })
  console.log(req.body)
  place.save()
  res.json(place)
}
//ADD CLASS
const classES = async (req, res) => {
  let classES = await new classes({
    name: req.body.name,
    schoolname: req.body.schoolname,
   
  })
  console.log(req.body)
  classES.save()
  res.json(classES)
}
///ADD SCHOOLS
const school = async (req, res) => {
  let school = await new schools({
    schoolename: req.body.schoolename,
    schooladdress: req.body.schooladdress,
    schoolType: req.body.schoolType,
  })
  console.log(req.body)
  school.save()
  res.json(school)
}
///ADD teachers
const teachers = async (req, res) => {
  let teacher = await new tutor({
    name: req.body.name,
    subject: req.body.subject,
  })
  console.log(req.body)
  teacher.save()
  res.json(teacher)
}

module.exports = { students, login, addAddress, classES, school, teachers }
