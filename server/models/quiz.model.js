
const mongoose = require('mongoose')


const quizSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    quizName: {
        type: String,
        required: true
    },
    quizScore: {
        type: Number,
    }
})


module.exports = mongoose.model('Quiz', quizSchema)
