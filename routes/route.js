const control = require('../controllers/logic')
const auth = require('../middleware/auth')
const express = require('express')
const router = express.Router()
const demo = require('../demo')
const pop = require('../pop.find')

router.get('/finder', auth, demo.finder)
router.get('/founder', pop.founder)
router.get('/founder1', pop.founder1)
router.put('/updateClass/:id', pop.updateClass)

router.post('/login', control.login)

router.post('/school', control.school)
router.post('/classES', control.classES)
router.post('/teachers', control.teachers)
router.post('/students', control.students)
router.post('/addAddress', control.addAddress)
module.exports = router
