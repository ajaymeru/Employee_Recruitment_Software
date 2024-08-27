const User = require("../models/userSchema")
const createtoken = require("../utils/token")

// signup

const usersignup = async (req, res) => {
    const data = req.body
    console.log(data);

    try {
        const user = await User.signup(data)

        const token = createtoken(user._id)
        res.status(201).json({ message: `${user.role} Account crreated Sucessfully`, token })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}

// login user

const userlogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.login(email, password)
        const token = createtoken(user._id)
        res.status(200).json({ message: `${user.role} Login sucessfull`, token })

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = { usersignup, userlogin }