const control = require('../controllers/registerController')
const express = require('express')
const router = express.Router()

router.post('/register', control.register)
router.post('/login', control.login)
module.exports = router
