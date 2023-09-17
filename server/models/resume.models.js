// models/Resume.js
const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    fullName: String,
    email: String,
    phone: String,
    address: String,
    education: String,
    date1: Date,
    date2: Date,
    education2: String,
    workExperience: String,
    skills: String,
    projects: String,
    portfolioLinks: String,
    achievements: String,
});

const Resume = mongoose.model('Resume', resumeSchema);
module.exports = Resume


