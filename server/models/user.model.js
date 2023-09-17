const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    contactNo: String,
    dateOfBirth: Date,
    motherTongue: String,
    qualification: String,
    university: String,
    experience: {
        type: String,
        enum: ['Fresher', 'Experience']
    },
    jobTitle: String,
    jobLocation: String,
    resume: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
