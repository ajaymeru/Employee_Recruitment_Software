const { Joblist } = require("../models/jobSchema");
const jobStatus = require("../models/JobStatus")
const User = require("../models/userSchema");
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
    const { jobcompanyName, jobRole, jobTechnologies, jobExperienceRequired, jobLocation, jobGraduate, language, jobNoticePeriod, jobDescription } = req.body;
    const employer_id = req.user._id
    try {
        const jobId = uuidv4();
        const newjob = new Joblist({ jobcompanyName, jobRole, jobTechnologies, jobExperienceRequired, jobLocation, jobGraduate, language, jobNoticePeriod, jobDescription, employer_id, jobId });
        const job = await newjob.save();
        res.status(200).json({ job });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// get jobb by idy
const getjobByID = async (req, res) => {
    const { id, role } = req.user
    console.log(id);

    const { jobId } = req.params
    if (role === "EMPLOYEE") {
        const job = await Joblist.find({ jobId: jobId })
        if (!job) {
            return res.status(404).json({ message: "job not foundd" })
        }
        return res.status(200).json({ job })
    }
    else if (role === "EMPLOYER") {
        const job = await Joblist.find({ employer_id: id, jobId: jobId })
        if (!job) {
            return res.status(404).json({ message: "job not foundd" })
        }
        return res.status(200).json({ job })
    }

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

const applyForJob = async (req, res) => {
    const { jobId } = req.params;
    const employee_Id = req.user._id; // Assuming you are getting the employee ID from the authenticated user

    try {
        // Find the job by jobId
        const [job] = await Joblist.find({ jobId: jobId });
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }

        const employer_id = job.employer_id;

        // Check if the user has already applied for the job
        const status = await jobStatus.find({ employee_Id: employee_Id, jobId: jobId });
        if (status.length > 0) {
            return res.status(400).json({ message: "Already applied for this role" });
        }

        // Save new application status
        const newJobStatus = new jobStatus({
            jobId: jobId,
            employer_id: employer_id,
            employee_Id: employee_Id,
        });
        await newJobStatus.save();

        return res.status(200).json({ message: "Job applied successfully" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const appliedfetchjobs = async (req, res) => {
    const userId = req.user._id;
    const userRole = req.user.role;
    try {
        let jobs;
        if (userRole === "EMPLOYEE") {
            jobs = await jobStatus.find({ employee_Id: userId, jobApplyStatus: "APPLIED" });
            if (jobs.length === 0) {
                return res.status(404).json({ message: "No jobs found" });
            }
            return res.status(200).json({ jobs });
        } else if (userRole === "EMPLOYER") {
            jobs = await jobStatus.find({ employer_id: userId, jobApplyStatus: "APPLIED" });
            if (jobs.length === 0) {
                return res.status(404).json({ message: "No applications found" });
            }
            const employees = jobs.map(job => ({
                jobId: job.jobId,
                employees: job.employee_Id
            }))
            return res.status(200).json({ employees });
        } else {
            return res.status(400).json({ message: "Invalid user role" });
        }
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

const findEmployerOrEmployee = async (req, res) => {
    const userId = req.user._id;
    const userRole = req.user.role;
    try {
        let users;
        if (userRole === "EMPLOYER") {
            users = await User.find({ role: "EMPLOYEE" });
        }
        else if (userRole === "EMPLOYEE") {
            users = await User.find({ role: "EMPLOYER" });
        }
        if (users) {
            return res.status(200).json({ users });
        } else {
            return res.status(404).json({ message: "No matching users found." });
        }
    } catch (err) {
        return res.status(500).json({ message: "Internal server error", error: err.message });
    }
};


module.exports = { createJobPost, showallJobs, editJobpost, deletejob, getjobByID, getJobs, applyForJob, appliedfetchjobs, findEmployerOrEmployee };
