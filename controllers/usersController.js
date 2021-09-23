const { User } = require('../models/index')
const { decode } = require('../helpers/bcrypt')
const { signToken, verifyToken } = require('../helpers/jwt')
const nodemailer = require('nodemailer')

class UserController {

  static async register(req, res, next) {
    const { email, password, phoneNumber } = req.body
    try {
      const createdUser = await User.create({ email, password, phoneNumber })

      const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
          user: "h8-foodhub@outlook.com", //SARAN PAKAI EMAIL DARI OUTLOOK
          pass: "h8foodhub"
        }
      })

      const options = {
        from: "h8-foodhub@outlook.com",
        to: email,
        subject: "Selamat datang di FoodHub",
        text: "Terima kasih sudah bergabung di FoodHub"
      }    
      
      transporter.sendMail(options, function(err, info) { 
        if(err) {
          console.log(err);
          return
        }
        console.log("Sent: ", info.response);
      })
      
      //EMAIL MASUK KE SPAM
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
      next(err)
    }
  }

}

module.exports = UserController
