const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Image', imageSchema);