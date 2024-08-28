const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    companyName: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    companytype: {
        type: String
    },
    address: {
        type: String
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["EMPLOYER", "EMPLOYEE"],
        required: true
    }
}, {
    timestamps: true
})

// Statics signup func

userSchema.statics.signup = async (data) => {
    const { companyName, email, number, companytype, address, firstname, lastname, password, role } = data
    const user = await User.findOne({ email })
    if (user) {
        throw new Error("Email already in use")
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ companyName, email, number, companytype, address, firstname, lastname, password: hashedPassword, role })
    await newUser.save()
    return newUser;
}

// login function
userSchema.statics.login = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error("Invalid email")
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