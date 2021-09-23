const router = require('express').Router()
const errorHandler = require('../middlewares/errorhandler')

const userRouter = require("./user")
const favouriteRouter = require("./favourite")
const recipeRouter = require("./recipe")

router.use("/", userRouter)
router.use("/favourite", favouriteRouter)
router.use("/recipe", recipeRouter)

router.use(errorHandler)

module.exports = router
