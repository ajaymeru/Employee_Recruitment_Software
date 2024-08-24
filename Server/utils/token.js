const jwt = require("jsonwebtoken")

const createtoken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" })
}
module.exports = createtoken;