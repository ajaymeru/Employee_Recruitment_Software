const User = require("../models/userSchema")
const createtoken = require("../utils/token")
const bcrypt = require("bcrypt");
const { generateOTP, transporter, sendOTP } = require("../utils/emailOTP")

// signup
const usersignup = async (req, res) => {
    const data = req.body
    try {
        const user = await User.signup(data)
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
        // console.log(token);
        res.status(200).json({ message: `${user.role} Login sucessfull`, token })

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}
// get user details
const getUserDetails = async (req, res) => {
    const user_id = req.user._id
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

const verifyOTP = async (req, res) => {
    const { email, otp } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "Invallid email" })
        }
        if (user.otp !== otp) {
            return res.status(400).json({ message: "Invalid OTP" })
        }
        user.isVerified = true;
        user.otp = undefined
        user.otpExpires = undefined

        await user.save()
        return res.status(200).json({ message: "OTP verified sucessfully" })
    } catch (Error) {
        return res.status(400).json({ message: Error.message })
    }
}

const forgotpassword = async (req, res) => {
    const { email } = req.body
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid User" });
        }
        const otp = generateOTP();
        const otpExpires = new Date(Date.now() + 2 * 60 * 1000);
        user.otp = otp;
        user.otpExpires = otpExpires;
        await user.save();
        // console.log(otp);
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Reset Password OTP",
            text: `The one-time password (OTP) for validating your email id is ${otp}. It expires in 10 minutes.`
        });
        return res.status(200).json({ message: "succesfully sent otp" })
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
}

const resetPassword = async (req, res) => {
    const { email, otp, password } = req.body
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid User" });
        }
        if (otp !== user.otp) {
            return res.status(400).json({ message: "Invalid or expired OTP" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        user.password = hashedPassword;
        user.otp = undefined;
        user.otpExpires = undefined
        await user.save();
        return res.status(200).json({ message: "Password changed successfully" });
    }
    catch (err) {
        return res.status(400).json({ message: err.message })
    }
}

const changePassword = async (req, res) => {
    const user_id = req.user._id
    const { oldPassword, newPassword } = req.body;
    try {
        const user = await User.findById(user_id);
        if (!user) {
            return res.status(400).json({ message: "Invalid User" });
        }
        const isValidPassword = await bcrypt.compare(oldPassword, user.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: "Invalid Old Password" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        user.password = hashedPassword;
        await user.save();
        return res.status(200).json({ message: "Password changed successfully" });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};





module.exports = { usersignup, userlogin, getUserDetails, updateUser, verifyOTP, changePassword, forgotpassword, resetPassword }    