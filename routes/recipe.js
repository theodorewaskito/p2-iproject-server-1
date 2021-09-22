const router = require('express').Router()
const recipeController = require("../controllers/recipesController")

router.get("/search", recipeController.search)

module.exports = router