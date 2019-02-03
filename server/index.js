const express = require("express")
const path = require('path')
const Album = require('./db/Album')
const Photo = require('./db/Photo')

const app = express()

app.use(express.json())
app.use(express.urlencoded(path.join(__dirname, '..', 'public')))

app.get('/api/albums', async (req, res) => {
  try {
    const albums = await Album.findAll()

    res.json({
      albums
    })
  } catch (error) {
    console.log(error)
    res.status(500)
    res.send()
  }
})

app.get('/api/photos', async (req, res)=> {
  try {
    const photos = await Photo.findAll()

    res.json({
      photos
    })
  } catch (error) {
    console.log(error)
    res.status(500)
    res.send()
  }
})


module.exports = app