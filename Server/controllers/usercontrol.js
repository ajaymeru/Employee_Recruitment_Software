const User = require("../models/userSchema")
const createtoken = require("../utils/token")

// signup
const usersignup = async (req, res) => {
    const data = req.body
    // console.log(data);
    try {
        const user = await User.signup(data)
        // const token = createtoken(user._id, user.role)
        res.status(201).json({ message: ` Account crreated Sucessfully` })
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
        const token = createtoken(user._id, user.role)
        console.log(token);

        res.status(200).json({ message: `${user.role} Login sucessfull`, token })

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

// get user details
const getUserDetails = async (req, res) => {
    const user_id = req.user._id
    // console.log(user_id)
    try {
        const user = await User.findById({ _id: user_id })
        console.log(user);

        res.status(200).json({ message: "User details found", user })

    } catch (err) {
        res.status(400).json({ message: err.message })
    }

}

// update || or edit 
const updateUser = async (req, res) => {
    const user_id = req.user._id
    try {
        const user = await User.findByIdAndUpdate(user_id, req.body, { new: true })
        res.status(200).json({ message: "upadated succesfully", user })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = { usersignup, userlogin, getUserDetails, updateUser }