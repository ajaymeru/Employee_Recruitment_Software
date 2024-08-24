const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobilenumber: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    }
)

// collection name
const Employee = mongoose.model("Employee", employeeSchema)
module.exports = Employee