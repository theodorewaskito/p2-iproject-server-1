const router = require('express').Router()
const recipeController = require("../controllers/recipesController")

router.get("/search", recipeController.search)
router.get("/recipe/:label", recipeController.search)

module.exports = router