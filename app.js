if(process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const routes = require("./routes/index")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

// app.get('/search', async (req, res) => {
//   // let APP_ID = process.env.APP_ID
//   // let API_KEY = process.env.API_KEY
//   let APP_ID = "3859f1ed"
//   let API_KEY = "d5f7f14ab3b57071ddc3b39526e9961d"
//   const { keyword } = req.query;

//   try {
//     const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${API_KEY}&q=${keyword}`)
//     res.status(200).json(response.data.hits)
//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error)
//   }
// })


// app.post('/recipe/:label', async(req, res) {
//   const recipeLabel = req.params.label
//   try {


//     const result = await Bookmark.create({
//       UserId: req.user.id,
//       NewsId: newsId
//     })
//     res.status(201).json(result)

//   } catch(error) {
//     res.status(500).json(error)
//   }
// })


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})