const Quiz = require('../models/quiz.model')
const User = require('../models/user.model')


const saveQuiz = async (req, res) => {
    const { quizName, quizScore } = req.body
    try {
        const user = req.user._id;
        const quiz = new Quiz({
            user,
            quizName,
            quizScore
        })
        await quiz.save()
        res.status(201).json({
            success: true,
            message: 'Quiz saved successfully',
            quiz
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        })
    }
}


module.exports = {
    saveQuiz
}