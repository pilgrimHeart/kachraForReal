const jwt = require('jsonwebtoken')

let auth = async (req, res, next) => {
  try {
    let token = await req.headers.authorization.split(' ')[1]
    console.log(token)
    const verify = jwt.verify(token, 'this is dummy text')
    console.log(verify)
    next()
  } catch (error) {
    console.log(error)
    console.log("invalid token")
  }
}
module.exports = auth
