import dotenv from "dotenv"
import connectDB from "./db/index.js"
import app from "./app.js"

dotenv.config({
  // global instance
  path: "./my-backend/.env",
})

/*
  The connectDB() function is  asynchronous so it returns a promise
  so we can use then-catch on it,
*/
connectDB()
  .then(() => {
    const server = app.listen(process.env.PORT || 8080, () => {
      console.log(`Server is running at port :${process.env.PORT}`)
    })

    server.on("error", (error) => {
      console.log("Error starting the server", error)
    })
  })
  .catch((err) => {
    console.error("Error connecting DB:", err)
  })

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
