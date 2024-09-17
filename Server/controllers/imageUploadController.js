const imageSchema = require("../models/imageUploadSchema")
const User = require("../models/userSchema")

const imageUpload = async (req, res) => {
    const userId = req.user._id;
    try {
        const user = await User.findById({ _id: userId });
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        if (!req.file) {
            return res.status(400).json({ message: "No image uploaded" })
        }
        const image = await imageSchema.findOne({ userId })
        if (image) {
            image.image = req.file.filename;
            image.imagePath = req.file.path
        } else {
            image = new imageSchema({
                userId: userId,
                image: req.file.filename,
                imagePath: req.file.path
            })
        }
        await image.save()
        res.status(201).json({ message: "Image uploaded successfully" })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = imageUpload 