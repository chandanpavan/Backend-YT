import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
  // global instance
  path: "./my-backend/.env",
})

connectDB()

/*
import express from "express"
const app = express()

dotenv.config({
  path: "./my-backend/.env",
})


;(async () => {
  try {
    await mongoose.connect(`${process.env.DB_URL}`)
    app.on("error", (error) => {
      console.log("ERROR", error)
      throw error
    })

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("ERROR: ", error)
    throw error
  }
})()
 */
