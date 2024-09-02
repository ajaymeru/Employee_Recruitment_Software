const express = require("express")

const router = express.Router()

const { usersignup, userlogin, getUserDetails, updateUser } = require("../controllers/usercontrol")

const {userRoleMiddleware} = require("../middleware/usermiddleware")

router.post("/signup", usersignup)

router.post("/login", userlogin)

router.use(userRoleMiddleware)

router.get("/", getUserDetails)

router.patch("/edit", updateUser)

module.exports = router
