const { User, Favourite } = require('../models/index')
const { verify } = require('../helpers/jwt')

async function authN(req, res, next) {
  const { access_token } = req.headers

  if(access_token ) {
    try {
      const payload = verify(access_token)
      const userId = await User.findByPk(payload.id)

      if(userId) {
        req.user = {
          id: payload.id,
          email: payload.email
        }
        next()
      } else {
        res.status(401).json({ message: "Invalid Token"})
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error"})
    }
  } else {
    res.status(401).json({ message: "Invalid Token"})
  }
}

async function authZ(req, res, next) {
  const userId = req.user.id
  const favouriteId = req.params.id

  try {
    const data = await Favourite.findByPk(favouriteId)
    if(data) {
      if (userId === data.UserId) {
        next()
      } else {
        res.status(403).json({ message: "Forbidden to Access"})
      }
    } else {
      res.status(404).json({ message: "Data Not Found"})
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error"})
  }
}

module.exports = { authN, authZ }