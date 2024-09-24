const mongoose = require("mongoose")
const { Joblist } = require("../models/jobSchema")
const { User } = require("../models/userSchema")

const jobStatusSchema = new mongoose.Schema({
    employer_id: {
        type: String,
    },
    jobId: {type: String,
        
    },
    employee_Id: {
        type: String,
    },
    jobApplyStatus: {
        type: String,
        default: "APPLIED"
    }
});

const jobStatus = mongoose.model("jobStatus", jobStatusSchema)
module.exports = jobStatus 