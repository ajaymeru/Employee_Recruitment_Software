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

// Routes
// employer
const employerRoutes = require("./routes/employerRoutes")
app.use("/api/employer", employerRoutes)

// connecting to port
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`connected to http://localhost:${port}/`);
})