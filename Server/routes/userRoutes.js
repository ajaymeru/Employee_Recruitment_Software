const express = require("express")

const router = express.Router()

const { usersignup, userlogin, getUserDetails, updateUser } = require("../controllers/usercontrol")

const {userRoleMiddleware} = require("../middleware/usermiddleware")


// sign upo
router.post("/signup", usersignup)

// login user
router.post("/login", userlogin)

router.use(userRoleMiddleware)


// get user details
router.get("/", getUserDetails)

// edit details
router.patch("/edit", updateUser)

module.exports = router
