import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

// app.use() is only used for middleware
app.use(cors({ origin: process.env.CORS_ORIGIN }))
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

// routes import

import userRouter from "./routes/user.routes.js"

// routes declaration

app.use("/api/v1/users", userRouter)

// https://localhost:8000/api/v1/users/register

export default app
