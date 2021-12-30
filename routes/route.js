const control = require('../controllers/register')
const control1 = require('../controllers/login')

module.exports = (router) => {
  router.post('/register', control.register)
  router.post('/login', control1.login)
}
