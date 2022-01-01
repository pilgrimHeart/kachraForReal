const control = require('../controllers/pureFunction')
const auth = require('../controllers/test')
const express = require('express')
const router = express.Router()

router.post('/register', control.register)
router.post('/login', control.login)
router.post('/hi', auth.auth)
module.exports = router
