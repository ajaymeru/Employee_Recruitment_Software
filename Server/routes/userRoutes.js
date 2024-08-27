const express = require("express")

const router = express.Router()

const { usersignup, userlogin } = require("../controllers/usercontrol")

// sign upo
router.post("/signup", usersignup)

// login user
router.post("/login", userlogin)

module.exports = router

