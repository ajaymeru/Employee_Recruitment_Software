require("dotenv").config()
const express = require("express")
const app = express()

// middleware I/O in req.body
app.use(express.json())


// Mongodb connection
require("./dataBase/connection")

app.get("/", (req, res) => {
    res.send("Hello World")
})

// Require Routes
const userroutes = require("./routes/userRoutes")
const jobRoutes = require("./routes/jobRoutes")

// Routes
app.use("/api/v1/users", userroutes)
app.use("/api/v1/joblists", jobRoutes)


// connecting to port
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`connected to http://localhost:${port}/`);
})
