const {db, Album, Photo} = require('./server/db')

const seed = async () => {
  await db.sync({ force: true })

  const mexico = await Album.create({ name: "Mexico 2017" })

  const kid = await Photo.create({
    name: "Kid",
    photoUrl: "kid.jpg",
    albumId: mexico.id
  })

  const backpack = await Photo.create({
    name: "Backpack",
    photoUrl: "backpack.jpg",
    albumId: mexico.id
  })

  const legs = await Photo.create({
    name: "Legs",
    photoUrl: "legs.jpg",
    albumId: mexico.id
  })

  db.close()
  console.log(`
  
      Seeding successful!

      Check DB to see data!
  `)
}

seed().catch(err =>{
  db.close()
  console.log(`

    Error!

    ${err.message}

    ${err.stack}
  
  `)
})