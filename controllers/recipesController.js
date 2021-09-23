const axios = require('axios')

class RecipeController {

  static async search(req, res, next) {
    const APP_ID = process.env.APP_ID
    const API_KEY = process.env.API_KEY
    const { keyword } = req.query;

    try {
      const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${API_KEY}&q=${keyword}`)
      res.status(200).json(response.data.hits)
    } catch (error) {
      next(error)
    }
  }

  static async getRecipe(req, res, next) {

  }

}

module.exports = RecipeController
