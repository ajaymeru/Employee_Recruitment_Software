const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const employerSchema = new mongoose.Schema({
    companyName: {
        type: String,

        unique: true
    },
    officialEmail: {
        type: String,
        required: true,
        unique: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    companyType: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true
    }
)

// Statics signup func
employerSchema.statics.signup = async (data) => {
    const { companyName, officialEmail, contactNumber, companyType, password, address } = data
    const employer = await Employer.findOne({ officialEmail })
    if (employer) {
        throw new Error("Email already exists")
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newEmployer = new Employer({ companyName, officialEmail, contactNumber, companyType, password: hash, address })
    await newEmployer.save()
    return newEmployer
}

// static login function
employerSchema.statics.login = async (officialEmail, password) => {
    const employer = await Employer.findOne({ officialEmail: officialEmail })
    if (!employer) {
        throw new Error("Invalid Email ")
    }
    const match = await bcrypt.compare(password, employer.password)
    if (!match) {
        throw new Error("Invalid Password")
    }
    return employer
}

// collection name
const Employer = mongoose.model("Employer", employerSchema)
module.exports = Employer