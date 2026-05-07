import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiErrors } from "../utils/ApiErrors.js"
import { User } from "../models/user.models.js"
import { uploadOnCloudinary } from "../utils/Cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const registerUser = asyncHandler(async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exist : username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return response

    const { fullname, email, username, password } = req.body
    console.log("email:", email)

    if (
        [fullname, email, username, password].some(
            /* why is .some used => ir checks if any of the array items holds true 
                condition */
            (field) => !field || field?.trim() === ""
        )
    ) {
        throw new ApiErrors(400, "All fields are Required")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }],
        // what is this syntax => it checks if either username or email exists already.
    })

    if (existedUser) {
        throw new ApiErrors(409, "User with email or username already exists")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path
    // know abt question mark and avatar
    /* 
        question mark check if the req.files exists and let it get to avatar so if it doesnt
        exist it will return undefined rather than throwing an error

        and the avatar is coming from the routes and as multer saves the files in an array
        we are telling it to get the first item of the array
    */
    // console.log(avatarLocalPath);
    const coverImageLocalPath = req.files?.coverImage[0]?.path

    if (!avatarLocalPath) {
        throw new ApiErrors(400, "Avatar file is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!avatar) {
        throw new ApiErrors(400, "Avatar file is required")
    }

    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        // hashing not done
        // => hashing is done as it redirects to userSchema where it will do the hashing
        //    before saving it to DB
        username: username.toLowerCase(),
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiErrors(500, "Something went wrong while creating User")
    }

    return res
        .status(201)
        .json(new ApiResponse(200, createdUser, "User registered successfully"))
})

export { registerUser }
