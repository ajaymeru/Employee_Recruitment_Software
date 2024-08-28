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
    }
},
    {
        timestamps: true
    }
)

// jobSchema.statics.createPost = async (req, res) => {
// const { technologies, experience, location, graduate, language, noticeperiod } = data;

// }

const Joblist = mongoose.model("Joblist", jobSchema);

module.exports = { Joblist };