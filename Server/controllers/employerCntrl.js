const Employer = require("../models/employerSchema")
const createtoken = require("../utils/token")

// signup
const signupeEmployer = async (req, res) => {
    const data = req.body
    try {
        const employer = await Employer.signup(data)
        // token creation
        const token = createtoken(employer._id)
        res.status(200).json({ message: "Employer created successfully", token })
    }
    catch (err) {
        return res.status(400).json({ message: err.message })
    }
}

// login useer
const loginEmployer = async (req, res) => {
    const { officialEmail, password } = req.body
    try {
        const employer = await Employer.login({ officialEmail, password })
        const token = createtoken(employer._id)
        res.status(200).json({ message: "Login suseesful", token })
    }
    catch (err) {
        return res.status(400).json({ message: err.message })
    }
}

module.exports = { signupeEmployer, loginEmployer }