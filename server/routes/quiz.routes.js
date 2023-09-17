const express = require('express')
const router = express.Router()
const { saveQuiz } = require('../controllers/quiz.controllers')
const { verifyJWT } = require('../middleware/auth')

router.post('/save', verifyJWT, saveQuiz)

module.exports = router;