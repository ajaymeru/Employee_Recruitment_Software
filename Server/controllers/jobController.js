const { Joblist } = require("../models/jobSchema");

// global to acces to CRUD operation

// Get all jobs
const showallJobs = async (req, res) => {
    try {
        const jobs = await Joblist.find().sort({ createdAt: -1 });
        res.status(200).json(jobs);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Create a job post
const createJobPost = async (req, res) => {
    const { technologies, experience, location, graduate, language, noticeperiod } = req.body;

    try {
        const newjob = new Joblist({ technologies, experience, location, graduate, language, noticeperiod });
        const job = await newjob.save();
        res.status(200).json({ job });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Edit||update a job post
const editJobpost = async (req, res) => {
    try {
        const id = req.params.id
        const job = await Joblist.findByIdAndUpdate({ _id: id }, req.body, { new: true })
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }
        res.status(200).json({ job });
    } catch (err) {
        res.status(400).json({ Error: err.message })
    }

}

// Delete a job post
const deletejob = async (req, res) => {
    try {
        const id = req.params.id
        const job = await Joblist.findByIdAndDelete({ _id: id })
        res.status(200).json({ job })
    }
    catch (err) {
        res.status(400).json({ Error: err.message })
    }
}

module.exports = { createJobPost, showallJobs, editJobpost, deletejob }