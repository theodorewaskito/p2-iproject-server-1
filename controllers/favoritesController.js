const { Favourite } = require('../models/index')

class FavouriteControl {

  static async showFav(req, res, next) {
    const userId = req.user.id
    try {
      const result = await Favourite.findAll({
        where: { UserId: userId },
        order: [
          ['updatedAt', 'DESC']
        ]
      })
      res.status(200).json(result)
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  static async addFav(req, res, next) {
    const { recipeName, recipeImage } = req.body

    try {
      const createFav = await Favourite.create({
        UserId: req.user.id,
        recipeName,
        recipeImage
      })
      
      res.status(201).json(createFav)
    } catch (error) {
      console.log(error);
      // res.status(500).json(error)
    }
  }

}

module.exports = FavouriteControl

