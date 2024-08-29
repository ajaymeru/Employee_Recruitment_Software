const { Joblist } = require("../models/jobSchema");
const { v4: uuidv4 } = require("uuid")


// get all jobs globally
const getJobs = async (req, res) => {
    try {
        const jobs = await Joblist.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}
// Get all jobs by USER specific
const showallJobs = async (req, res) => {
    const employer_id = req.user._id
    // console.log(employer_id);
    try {
        const jobs = await Joblist.find({ employer_id: employer_id }).sort({ createdAt: -1 });
        res.status(200).json(jobs);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Create a job post
const createJobPost = async (req, res) => {
    const { technologies, experience, location, graduate, language, noticeperiod } = req.body;
    const employer_id = req.user._id
    try {
        const jobId = uuidv4();
        const newjob = new Joblist({ technologies, experience, location, graduate, language, noticeperiod, employer_id, jobId });
        const job = await newjob.save();
        res.status(200).json({ job });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// get jobb by idy
const getjobByID = async (req, res) => {
    const employer_id = req.user._id
    const id = req.params.jobId
    const job = await Joblist.find({ employer_id: employer_id, jobId: id })
    if (!job) {
        return res.status(404).json({ message: "job not foundd" })
    }
    res.status(200).json({ job })
}

// Edit||update a job post
const editJobpost = async (req, res) => {
    try {
        const id = req.params.jobId
        const employer_id = req.user._id
        const job = await Joblist.findOneAndUpdate({ employer_id: employer_id, jobId: id }, req.body, { new: true })
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
        const id = req.params.jobId
        const employer_id = req.user._id
        const job = await Joblist.findOneAndDelete({ employer_id: employer_id, jobId: id })
        res.status(200).json({ job })
    }
    catch (err) {
        res.status(400).json({ Error: err.message })
    }
}

module.exports = { createJobPost, showallJobs, editJobpost, deletejob, getjobByID, getJobs }