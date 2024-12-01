const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/inkprog", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connected to MongoDB")
    } catch (err) {
        console.error("Error connecting to MongoDB", err.message)
    }
}
connectDB()