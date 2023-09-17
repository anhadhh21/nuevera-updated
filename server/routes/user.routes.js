const express = require('express');
const router = express.Router();
const { verifyJWT } = require('../middleware/auth')
const { register, getLoggedIn, upload, login } = require('../controllers/user.controllers')
const { getAlluser } = require('../utils/Email')

router.post('/register', upload, register)
router.post('/login', login)
router.get('/getLoggedIn', verifyJWT, getLoggedIn)


module.exports = router;