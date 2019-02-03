const express = require("express")
const path = require('path')
const Album = require('./db/Album')
const Photo = require('./db/Photo')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '..', 'public')))

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

app.get('/api/albums/:albumId', async (req, res)=> {
  try {
    const id = req.params.albumId
    const photos = await Photo.findAll({ where: { albumId: id }})

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