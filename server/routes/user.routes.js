const express = require('express');
const router = express.Router();
const { verifyJWT } = require('../middleware/auth');
const { register, getLoggedIn, login } = require('../controllers/user.controllers');
const multer = require('multer');
const path = require('path'); // Import the 'path' module

const { getAlluser } = require('../utils/Email');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
});

var upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (
            file.mimetype === 'application/pdf' ||
            file.mimetype === 'application/vnd.ms-powerpoint' ||
            file.mimetype === 'application/vnd.openxmlformats-officedocument.presentationml.presentation' ||
            file.mimetype === 'application/zip' ||
            file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ) {
            cb(null, true);
        } else {
            cb(new Error('Only pdf, docx, zip, ppt, pptx formats are allowed'));
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 40
    }
});


router.post('/register', upload.single('resume'), register);
router.post('/login', login);
router.get('/getLoggedIn', verifyJWT, getLoggedIn);

module.exports = router;
