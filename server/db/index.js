const db = require('./db')
const Album = require('./Album')
const Photo = require('./Photo')

Album.hasMany(Photo)
Photo.belongsTo(Album)


module.exports = {
  db,
  Album,
  Photo
}