// models/Resume.js
const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    firstname: String,
    middlename: String,
    lastname: String,
    image: String,
    designation: String,
    address: String,
    email: String,
    phoneno: String,
    summary: String,
    achievements: [
        {
            achieve_title: String,
            achieve_description: String,
        },
    ],
    experiences: [
        {
            exp_title: String,
            exp_organization: String,
            exp_location: String,
            exp_start_date: Date,
            exp_end_date: Date,
            exp_description: String,
        },
    ],
    educations: [
        {
            edu_school: String,
            edu_degree: String,
            edu_city: String,
            edu_start_date: Date,
            edu_graduation_date: Date,
            edu_description: String,
        },
    ],
    projects: [
        {
            proj_title: String,
            proj_link: String,
            proj_description: String,
        },
    ],
    skills: [String],
});

const Resume = mongoose.model('Resume', resumeSchema);
module.exports = Resume


