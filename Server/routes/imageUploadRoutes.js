const express = require("express")
const router = express.Router()

const multer = require("multer")

const imageUpload = require("../controllers/imageUploadController")

const { userRoleMiddleware, checkRole } = require("../middleware/usermiddleware")

router.use(userRoleMiddleware)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), imageUpload);

module.exports = router 