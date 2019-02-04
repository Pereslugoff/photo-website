const {db, Album, Photo} = require('./server/db')

const seed = async () => {
  await db.sync({ force: true })

  const mexico = await Album.create({ name: "Mexico 2017" })
  const dc = await Album.create({ name: "September 9, 2017 - Washington DC"})
  const random = await Album.create({ name: "Random" })
  const sophmore = await Album.create({ name: "Sophmore" })
  const profession = await Album.create({ name: "Profession" })

  // MEXICO 2017

  const mex1 = await Photo.create({ 
    name: "Kid",
    photoUrl: "/photos/MEXICO/MEXICO_1.jpg",
    albumId: mexico.id
  })

  const mex2 = await Photo.create({ 
    name: "Backpacks",
    photoUrl: "/photos/MEXICO/MEXICO_2.jpg",
    albumId: mexico.id
  })

  const mex3 = await Photo.create({ 
    name: "Dogs",
    photoUrl: "/photos/MEXICO/MEXICO_3.jpg",
    albumId: mexico.id
  })

  const mex4 = await Photo.create({ 
    name: "Door",
    photoUrl: "/photos/MEXICO/MEXICO_4.jpg",
    albumId: mexico.id
  })

  const mex5 = await Photo.create({ 
    name: "Bird",
    photoUrl: "/photos/MEXICO/MEXICO_5.jpg",
    albumId: mexico.id
  })

  const mex6 = await Photo.create({ 
    name: "Legs",
    photoUrl: "/photos/MEXICO/MEXICO_6.jpg",
    albumId: mexico.id
  })

  const mex7 = await Photo.create({ 
    name: "Hats",
    photoUrl: "/photos/MEXICO/MEXICO_7.jpg",
    albumId: mexico.id
  })

  const mex8 = await Photo.create({ 
    name: "Swords",
    photoUrl: "/photos/MEXICO/MEXICO_8.jpg",
    albumId: mexico.id
  })

  const mex9 = await Photo.create({ 
    name: "Sleeper",
    photoUrl: "/photos/MEXICO/MEXICO_9.jpg",
    albumId: mexico.id
  })

  const mex10 = await Photo.create({ 
    name: "Ladders",
    photoUrl: "/photos/MEXICO/MEXICO_10.jpg",
    albumId: mexico.id
  })

  const mex11 = await Photo.create({ 
    name: "Dude",
    photoUrl: "/photos/MEXICO/MEXICO_11.jpg",
    albumId: mexico.id
  })

  const mex12 = await Photo.create({ 
    name: "Fashion",
    photoUrl: "/photos/MEXICO/MEXICO_12.jpg",
    albumId: mexico.id
  })

  const mex13 = await Photo.create({ 
    name: "Umbrella",
    photoUrl: "/photos/MEXICO/MEXICO_13.jpg",
    albumId: mexico.id
  })

  const mex14 = await Photo.create({ 
    name: "Kids",
    photoUrl: "/photos/MEXICO/MEXICO_14.jpg",
    albumId: mexico.id
  })

  const mex15 = await Photo.create({ 
    name: "Landscape",
    photoUrl: "/photos/MEXICO/MEXICO_15.jpg",
    albumId: mexico.id
  })

  const mex16 = await Photo.create({ 
    name: "Dog",
    photoUrl: "/photos/MEXICO/MEXICO_16.jpg",
    albumId: mexico.id
  })

  //PROFESSION
  const prof9 = await Photo.create({
    name: "Door Blank",
    photoUrl: "/photos/PROFESSION/PROFESSION_9.jpg",
    albumId: profession.id
  })


  const prof1 = await Photo.create({
    name: "Steering Wheel",
    photoUrl: "/photos/PROFESSION/PROFESSION_1.jpg",
    albumId: profession.id
  })

  const prof2 = await Photo.create({
    name: "Break Room",
    photoUrl: "/photos/PROFESSION/PROFESSION_2.jpg",
    albumId: profession.id
  })

  const prof3 = await Photo.create({
    name: "Verticle Calendar",
    photoUrl: "/photos/PROFESSION/PROFESSION_3.jpg",
    albumId: profession.id
  })

  const prof4 = await Photo.create({
    name: "Break Bench",
    photoUrl: "/photos/PROFESSION/PROFESSION_4.jpg",
    albumId: profession.id
  })

  const prof5 = await Photo.create({
    name: "Del Sweeping",
    photoUrl: "/photos/PROFESSION/PROFESSION_5.jpg",
    albumId: profession.id
  })

  const prof6 = await Photo.create({
    name: "Shop chai",
    photoUrl: "/photos/PROFESSION/PROFESSION_6.jpg",
    albumId: profession.id
  })

  const prof7 = await Photo.create({
    name: "Dads desk",
    photoUrl: "/photos/PROFESSION/PROFESSION_7.jpg",
    albumId: profession.id
  })

  const prof8 = await Photo.create({
    name: "Shop picture",
    photoUrl: "/photos/PROFESSION/PROFESSION_8.jpg",
    albumId: profession.id
  })

  const prof10 = await Photo.create({
    name: "Gaskets",
    photoUrl: "/photos/PROFESSION/PROFESSION_10.jpg",
    albumId: profession.id
  })

  const prof11 = await Photo.create({
    name: "Gary Desk",
    photoUrl: "/photos/PROFESSION/PROFESSION_11.jpg",
    albumId: profession.id
  })

  const prof12 = await Photo.create({
    name: "Steering Wheel",
    photoUrl: "/photos/PROFESSION/PROFESSION_12.jpg",
    albumId: profession.id
  })

  const prof13 = await Photo.create({
    name: "Steering Wheel",
    photoUrl: "/photos/PROFESSION/PROFESSION_13.jpg",
    albumId: profession.id
  })

  const prof14 = await Photo.create({
    name: "Steering Wheel",
    photoUrl: "/photos/PROFESSION/PROFESSION_14.jpg",
    albumId: profession.id
  })

  const prof15 = await Photo.create({
    name: "Self Portrait",
    photoUrl: "/photos/PROFESSION/PROFESSION_15.jpg",
    albumId: profession.id
  })

  const prof16 = await Photo.create({
    name: "Door with Dad",
    photoUrl: "/photos/PROFESSION/PROFESSION_1.jpg",
    albumId: profession.id
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

  // Random

  const r19 = await Photo.create({
    name: "Feet",
    photoUrl: "/photos/RANDOM/R_19.jpg",
    albumId: random.id
  })

  const r4 = await Photo.create({
    name: "Head Shadow",
    photoUrl: "/photos/RANDOM/R_4.jpg",
    albumId: random.id
  })


  const r2 = await Photo.create({
    name: "Tree Shadows",
    photoUrl: "/photos/RANDOM/R_2.jpg",
    albumId: random.id
  })

  const r3 = await Photo.create({
    name: "El Yunque",
    photoUrl: "/photos/RANDOM/R_3.jpg",
    albumId: random.id
  })

  const r22 = await Photo.create({
    name: "Rain",
    photoUrl: "/photos/RANDOM/R_22.jpg",
    albumId: random.id
  })

  const r14 = await Photo.create({
    name: "Tree Mexico",
    photoUrl: "/photos/RANDOM/R_14.jpg",
    albumId: random.id
  })

  const r5 = await Photo.create({
    name: "BillBoards",
    photoUrl: "/photos/RANDOM/R_5.jpg",
    albumId: random.id
  })


  const r7 = await Photo.create({
    name: "Fire",
    photoUrl: "/photos/RANDOM/R_7.jpg",
    albumId: random.id
  })

  const r1 = await Photo.create({
    name: "Del",
    photoUrl: "/photos/RANDOM/R_1.jpg",
    albumId: random.id
  })

  const r8 = await Photo.create({
    name: "Datenight",
    photoUrl: "/photos/RANDOM/R_8.jpg",
    albumId: random.id
  })

  const r9 = await Photo.create({
    name: "Inae",
    photoUrl: "/photos/RANDOM/R_9.jpg",
    albumId: random.id
  })

  const r21 = await Photo.create({
    name: "Reflection",
    photoUrl: "/photos/RANDOM/R_21.jpg",
    albumId: random.id
  })

  const r10 = await Photo.create({
    name: "Beer",
    photoUrl: "/photos/RANDOM/R_10.jpg",
    albumId: random.id
  })

  const r11 = await Photo.create({
    name: "Mexican Family",
    photoUrl: "/photos/RANDOM/R_11.jpg",
    albumId: random.id
  })

  const r13 = await Photo.create({
    name: "Gas Station",
    photoUrl: "/photos/RANDOM/R_13.jpg",
    albumId: random.id
  })

  const r15 = await Photo.create({
    name: "Family Street",
    photoUrl: "/photos/RANDOM/R_15.jpg",
    albumId: random.id
  })

  const r16 = await Photo.create({
    name: "Mirror",
    photoUrl: "/photos/RANDOM/R_16.jpg",
    albumId: random.id
  })

  const r17 = await Photo.create({
    name: "Puddle",
    photoUrl: "/photos/RANDOM/R_17.jpg",
    albumId: random.id
  })

  const r18 = await Photo.create({
    name: "Smoke",
    photoUrl: "/photos/RANDOM/R_18.jpg",
    albumId: random.id
  })

  const r12 = await Photo.create({
    name: "Snow",
    photoUrl: "/photos/RANDOM/R_12.jpg",
    albumId: random.id
  })

  const r20 = await Photo.create({
    name: "Hair",
    photoUrl: "/photos/RANDOM/R_20.jpg",
    albumId: random.id
  })

  //SOPHMORE

  const soph1 = await Photo.create({
    name: "Jump",
    photoUrl: "/photos/SOPHMORE/SOPHMORE_1.jpg",
    albumId: sophmore.id
  })

  const soph2 = await Photo.create({
    name: "Shake",
    photoUrl: "/photos/SOPHMORE/SOPHMORE_2.jpg",
    albumId: sophmore.id
  })

  const soph3 = await Photo.create({
    name: "Hand",
    photoUrl: "/photos/SOPHMORE/SOPHMORE_3.jpg",
    albumId: sophmore.id
  })

  const soph4 = await Photo.create({
    name: "Mirror",
    photoUrl: "/photos/SOPHMORE/SOPHMORE_4.jpg",
    albumId: sophmore.id
  })

  const soph5 = await Photo.create({
    name: "Hands",
    photoUrl: "/photos/SOPHMORE/SOPHMORE_5.jpg",
    albumId: sophmore.id
  })

  const soph6 = await Photo.create({
    name: "Back",
    photoUrl: "/photos/SOPHMORE/SOPHMORE_6.jpg",
    albumId: sophmore.id
  })

  const soph7 = await Photo.create({
    name: "Arms",
    photoUrl: "/photos/SOPHMORE/SOPHMORE_7.jpg",
    albumId: sophmore.id
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