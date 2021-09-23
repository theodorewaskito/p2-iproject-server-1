const { User } = require('../models/index')
const { decode } = require('../helpers/bcrypt')
const { signToken, verifyToken } = require('../helpers/jwt')

class UserController {

  static async register(req, res, next) {
    const { email, password, phoneNumber } = req.body
    try {
      const createdUser = await User.create({ email, password, phoneNumber })
      res.status(201).json({ email: createdUser.email, role: createdUser.role })
    } catch(err) {
      // res.status(500).json({ message: "Internal Server Error" })
      next(err)
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body
    try {
      const foundUser = await User.findOne({ 
        where: {
          email
        }
      })
      if (foundUser) {
        const isValid = decode(password, foundUser.password)
        if (isValid) {
          const access_token = signToken({
            id: foundUser.id,
            email: foundUser.email  
          })
          res.status(200).json({ access_token })
        } else {
          // res.status(401).json({ message: "Wrong Email/Password"})
          throw ({ name: 'Unauthorized'})
        }
      } else {
        // res.status(401).json({ message: "Wrong Email/Password"})
        throw ({ name: 'Unauthorized'})
      }
    } catch(err) {
      // if(error.name === "SequelizeValidationError") {
      //   const errors = error.errors.map( el => {
      //     return el.message
      //   })
      //   res.status(400).json({ message: errors })
      // } else {
      //   res.status(500).json({ message: "Internal Server Error" })
      // } 
      next(err)
    }
  }

}

module.exports = UserController
