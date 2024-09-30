const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const jobSchema = new mongoose.Schema({
    jobcompanyName: {
        type: String
    },
    jobRole: {
        type: String
    },
    jobTechnologies: {
        type: String
    },
    jobExperienceRequired: {
        type: String
    },
    jobLocation: {
        type: String
    },
    jobGraduate: {
        type: String
    },
    language:{
        type:String
    },
    jobNoticePeriod:{
        type:String
    },
    jobDescription:{
        type:String
    },
    employer_id: {
        type: String
    },
    jobId: {
        type: String,
        unique: true,
        required: true
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