const jwt = require('jsonwebtoken')

const auth = async (req, res) => {
  try {
    const bearerHeader = await req.headers['authorization']
    if (typeof bearerHeader !== undefined) {
      const bearer = await bearerHeader.split()
    } else {
    }
  } catch (error) {
    console.log('error')
  }
}
module.exports = { auth }
