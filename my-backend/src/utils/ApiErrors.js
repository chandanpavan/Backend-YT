class ApiErrors extends Error {
    constructor(
        statusCode,
        message = "Something went Wrong",
        errors = [],
        stack = ""
    ) {
        // Error's built-in constructor only needs the main error message.
        super(message)

        // Extra fields that our API can send back in a consistent format.
        this.statusCode = statusCode
        this.errors = errors
        this.data = null
        this.success = false

        if (stack) {
            this.stack = stack
        } else {
            // Creates a cleaner stack trace pointing to where ApiErrors was thrown.
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiErrors }
