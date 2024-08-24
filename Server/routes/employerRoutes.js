const express = require("express")

const router = express.Router()

const { signupeEmployer, loginEmployer } = require("../controllers/employerCntrl")

// login user
router.post("/login", loginEmployer)

// signup user
router.post("/signup", signupeEmployer)

module.exports = router