const jwt = require("jsonwebtoken")
const User = require("../models/userSchema")
require("dotenv").config()

const userRoleMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    // beareer
    const token = authorization.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }
    try {
        // reverse
        const { _id, role } = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(_id, role);
        const user = await User.findById(_id);
        req.user = user;
        next()
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized from end" })
    }
}



module.exports = userRoleMiddleware