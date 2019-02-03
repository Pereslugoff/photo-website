const {db, Album, Photo} = require('./server/db')

const seed = async () => {
  await db.sync({ force: true })

  const mexico = await Album.create({ name: "Mexico 2017" })
  const dc = await Album.create({ name: "September 9, 2017 - Washington DC"})

  // MEXICO 2017

  const kid = await Photo.create({
    name: "Kid",
    photoUrl: "/photos/kid.jpg",
    albumId: mexico.id
  })

  const backpack = await Photo.create({
    name: "Backpack",
    photoUrl: "/photos/backpack.jpg",
    albumId: mexico.id
  })

  const legs = await Photo.create({
    name: "Legs",
    photoUrl: "/photos/legs.jpg",
    albumId: mexico.id
  })

  // DC - JUGGALO/TRUMP RALLY

  const dcm1 = await Photo.create({
    name: "family",
    photoUrl: "/photos/DC_MARCH/DMARCH_1.jpg",
    albumId: dc.id
  })

  const dcm2 = await Photo.create({
    name: "memorial",
    photoUrl: "/photos/DC_MARCH/DMARCH_2.jpg",
    albumId: dc.id
  })

  const dcm3 = await Photo.create({
    name: "hand",
    photoUrl: "/photos/DC_MARCH/DMARCH_3.jpg",
    albumId: dc.id
  })

  const dcm4 = await Photo.create({
    name: "captain",
    photoUrl: "/photos/DC_MARCH/DMARCH_4.jpg",
    albumId: dc.id
  })

  const dcm5 = await Photo.create({
    name: "reporter",
    photoUrl: "/photos/DC_MARCH/DMARCH_5.jpg",
    albumId: dc.id
  })

  const dcm6 = await Photo.create({
    name: "butt",
    photoUrl: "/photos/DC_MARCH/DMARCH_6.jpg",
    albumId: dc.id
  })

  const dcm7 = await Photo.create({
    name: "flag",
    photoUrl: "/photos/DC_MARCH/DMARCH_7.jpg",
    albumId: dc.id
  })

  const dcm8 = await Photo.create({
    name: "standing",
    photoUrl: "/photos/DC_MARCH/DMARCH_8.jpg",
    albumId: dc.id
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