const express = require("express")
const router = express.Router()

// require all from job controller
const { createJobPost, showallJobs, editJobpost, deletejob } = require("../controllers/jobController")


// show all data 
router.get("/", showallJobs)

// post data
router.post("/", createJobPost)

// update
router.patch("/:id", editJobpost);

// delete
router.delete("/:id", deletejob)

module.exports = router