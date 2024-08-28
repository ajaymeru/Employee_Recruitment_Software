const jwt = require("jsonwebtoken")

const createtoken = (_id, role) => {
    return jwt.sign({ _id, role }, process.env.JWT_SECRET, { expiresIn: "3d" })
}
module.exports = createtoken;