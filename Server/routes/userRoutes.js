const express = require("express")

const router = express.Router()

const { usersignup, userlogin, getUserDetails, updateUser, verifyOTP, forgotpassword, resetPassword, changePassword } = require("../controllers/usercontrol")

const { userRoleMiddleware } = require("../middleware/usermiddleware")

router.post("/signup", usersignup)

router.post("/login", userlogin)

router.post("/verify-otp", verifyOTP);

router.post("/resend-otp", forgotpassword) //for resend otp

router.post("/forgot-password", forgotpassword) // for forget pw OTP

router.post("/resetpassword", resetPassword)

router.use(userRoleMiddleware)

router.get("/", getUserDetails)

router.patch("/edit", updateUser)

router.post("/change-password", changePassword)

module.exports = router
