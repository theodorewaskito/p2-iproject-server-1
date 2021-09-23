const { User, Favourite } = require('../models/index')
const { verifyToken } = require('../helpers/jwt')

async function authN(req, res, next) {
  const { access_token } = req.headers

  if(access_token ) {
    try {
      const payload = verifyToken(access_token)
      const userId = await User.findByPk(payload.id)

      if(userId) {
        req.user = {
          id: payload.id,
          email: payload.email
        }
        console.log(req.user);
        next()
      } else {
        throw({ name: "InvalidToken"})
        // res.status(401).json({ message: "Invalid Token"})
      }
    } catch (error) {
      // console.log(error);
      next(error)
      // res.status(500).json({ message: "Internal Server Error"})
    }
  } else {
    throw({ name: "InvalidToken"})
    // res.status(401).json({ message: "Invalid Token"})
  }
}

module.exports = { authN }