const PORT = 8080
const server = require('./index')
const {db} = require('./db')

db.sync()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server now running on ${PORT}
      
      
      http://localhost:${PORT}
      `)


    })
  })