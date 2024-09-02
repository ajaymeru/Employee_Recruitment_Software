const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const jobSchema = new mongoose.Schema({
    technologies: {
        type: String
    },
    experience: {
        type: String
    },
    location: {
        type: String
    },
    graduate: {
        type: String
    },
    language: {
        type: String
    },
    noticeperiod: {
        type: String
    },
    employer_id: {
        type: String
    },
    jobId: {
        type: String,
        unique: true,
        required: true
    },
    jobStatus: {
        type: String,
        enum: ["APPLIED", "NOT APPLIED"],
        default: "NOT APPLIED"
    },
    employee_Id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
},
    {
        timestamps: true
    }
)
const Joblist = mongoose.model("Joblist", jobSchema);

module.exports = { Joblist };