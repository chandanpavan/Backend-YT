import { ApiErrors } from "../utils/ApiErrors.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import jwt from "jsonwebtoken"
import { User } from "../models/user.models.js"

export const verifyJWT = asyncHandler(async (req, resizeBy, next) => {
    try {
        const token =
            req.cookies?.accessToken ||
            req.header("Authorzation")?.replace("Bearer ", "")

        if (!token) {
            throw new ApiErrors(401, "Unauthorized Access")
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decodedToken?._id).select(
            "-password -refreshToken"
        )

        if (!user) {
            // TODO:discuss abt frontend
            throw new ApiErrors(401, "Invalid Access Token")
        }

        req.user = user
        next()
    } catch (error) {
        throw new ApiErrors(500, error?.message || "Error while handling JWT ")
    }
})
