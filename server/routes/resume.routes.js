const express = require('express')
const router = express.Router()
const { createResume, getResume } = require('../controllers/resume.controllers')
const { verifyJWT } = require('../middleware/auth')


router.post('/createResume', verifyJWT, createResume)
router.get('/getResume', verifyJWT, getResume)

module.exports = router

