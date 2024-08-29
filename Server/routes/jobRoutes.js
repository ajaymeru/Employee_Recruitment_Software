const express = require("express")
const router = express.Router()

const { createJobPost, showallJobs, getjobByID, editJobpost, deletejob, getJobs } = require("../controllers/jobController")

const { userRoleMiddleware, checkRole } = require("../middleware/usermiddleware")

router.use(userRoleMiddleware)
// all users job posts
router.get("/alljobs", checkRole("EMPLOYEE"), getJobs)

// Employer perform Actions
router.use(checkRole("EMPLOYER"))

router.get("/", showallJobs)

router.post("/", createJobPost)

router.get("/:jobId", getjobByID)

router.patch("/:jobId", editJobpost);

router.delete("/:jobId", deletejob)

module.exports = router