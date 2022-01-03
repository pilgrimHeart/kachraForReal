const control = require('../controllers/pureFunction')
const auth = require('../middleware/auth')
const express = require('express')
const router = express.Router()
const demo = require('../demo')

router.post('/register', control.register)
router.post('/login', control.login)
router.get('/finder',auth, demo.finder)
module.exports = router
