const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
require("dotenv").config()
const { generateOTP, transporter, sendOTP } = require("../utils/emailOTP")

const userSchema = new mongoose.Schema({
    companyName: {
        type: String,
        // required: [true, "Email required"]
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: [true, "Email required"]
    },
    number: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 10
    },
    companytype: {
        type: String
    },
    address: {
        type: String
    },
    firstname: {
        type: String,
        // required: true,
        minLength: 2,
        maxLength: 20
    },
    lastname: {
        type: String,
        // required: true,
        minLength: 2,
        maxLength: 20
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    role: {
        type: String,
        enum: ["EMPLOYER", "EMPLOYEE"],
        required: true
    },
    technologies: {
        type: String
    },
    experience: {
        type: String,
        // required: true
    },
    location: {
        type: String
    },
    graduate: {
        type: String
    },
    languages: {
        type: Array
    },
    noticePeriod: {
        type: String
    },
    currentCompany: {
        type: String
    },
    otp: {
        type: String
    },
    otpExpires: {
        type: Date
    },
    isVerified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})




userSchema.statics.signup = async (data) => {
    const { companyName, email, number, companytype, address, firstname, lastname, password, role, technologies, experience, location, graduate, languages, noticePeriod, currentCompany } = data
    const user = await User.findOne({ email })
    if (user) {
        throw new Error("Email already in use")
    }
    const otp = generateOTP()
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000)
    console.log(otp, email);

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({
        companyName, email, number, companytype,
        address, firstname, lastname, password: hashedPassword,
        role, technologies, experience, location, graduate,
        languages, noticePeriod, currentCompany, otp, otpExpires
    })
    await newUser.save()
    await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: "OTP for Email Verification",
        text: `The one-time password (OTP) for validating your email id is ${otp}. It expires in 10 minutes.`
    })
    return newUser;
}

// login function
userSchema.statics.login = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error("Invalid email")
    }
    if (!user.isVerified) {
        throw new Error("Please verify your email before logging in.")
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw new Error("Invalid password")
    }
    return user
}

// collectiion name to store in db 
const User = mongoose.model('User', userSchema)
module.exports = User