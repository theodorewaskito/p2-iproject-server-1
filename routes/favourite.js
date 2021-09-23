const router = require('express').Router()
const favoriteController = require("../controllers/favoritesController")
const { authN } = require('../middlewares/auth')

router.use(authN)
router.post("/addFav", favoriteController.addFav)

router.get("/", favoriteController.showFav)


module.exports = router