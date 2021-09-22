const axios = require('axios')

class RecipeController {

  static async search(req, res, next) {
    // let APP_ID = "3859f1ed"
    // let API_KEY = "d5f7f14ab3b57071ddc3b39526e9961d"
    const APP_ID = process.env.APP_ID
    const API_KEY = process.env.API_KEY
    const { keyword } = req.query;
    console.log(APP_ID, API_KEY);
    try {
      const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${API_KEY}&q=${keyword}`)
      res.status(200).json(response.data.hits)
    } catch (error) {
      console.log(error);
      res.status(500).json(error)
    }
  }

  

}

module.exports = RecipeController
