const express = require("express")
const router = express.Router()

const { createJobPost, showallJobs, getjobByID, editJobpost, deletejob, getJobs, applyForJob, appliedfetchjobs } = require("../controllers/jobController")

const { userRoleMiddleware, checkRole } = require("../middleware/usermiddleware")

router.use(userRoleMiddleware)

// __________________EMPLOYEE_______________________
router.get("/employee/fetchjobs", checkRole("EMPLOYEE"), appliedfetchjobs) //working
router.get("/jobs", checkRole("EMPLOYEE"), getJobs)  //working 
router.get("/employee/:jobId", checkRole("EMPLOYEE"), getjobByID) //working 
router.patch("/jobs/:jobId/apply", checkRole("EMPLOYEE"), applyForJob); //working

// ___________________EMPLOYER_____________________
router.use(checkRole("EMPLOYER"))

router.get("/employer/fetchjobs", checkRole("EMPLOYER"), appliedfetchjobs) //working only when we use in top

router.get("/", showallJobs)  //working //done

router.post("/post", createJobPost) //working //done

router.get("/employer/:jobId", getjobByID) //working //done

router.patch("/:jobId", editJobpost); //working //done

router.delete("/:jobId", deletejob) //working //done


module.exports = router