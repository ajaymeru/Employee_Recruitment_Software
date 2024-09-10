const mongoose = require("mongoose")

const imageUpload = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    imageName: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const image = mongoose.model("image", imageUpload)
module.exports = image