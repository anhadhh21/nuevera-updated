const mongoose = require('mongoose')

const JobSchema = mongoose.Schema({
    jobTitle: {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    jobLocation: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    jobCategory: {
        type: String,
        required: true
    },
    jobSalary: {
        type: String,
        required: true
    },
    jobExperience: {
        type: String,
        required: true
    },
    jobQualification: {
        type: String,
        required: true
    },
    jobSkills: {
        type: String,
        required: true
    }
}
)

module.exports = mongoose.model('Job', JobSchema)










