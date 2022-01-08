import express from 'express'
import axios from 'axios'
const router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/people', async function (req, res) {
  let url = 'https://swapi.dev/api/people/'
  if (Object.keys(req.query).length > 0) {
    url += '?'
    Object.keys(req.query).forEach(key => {
      url += `${key}=${req.query[key]}&`
    })
    url = url.substring(0, url.length - 1)
  }
  const result = await axios.get(url)
  res.json(result.data)
})
// define the about route
router.get('/people/:id', async function (req, res) {
  const result = await axios.get(`https://swapi.dev/api/people/${req.params.id}`)
  res.json(result.data)
})

export default router