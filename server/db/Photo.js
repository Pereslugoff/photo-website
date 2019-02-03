const Sequelize = require('sequelize')
const db = require('./db')

const Photo = db.define('photo', {
  name: Sequelize.STRING,
  photoUrl: Sequelize.STRING
})

module.exports = Photo