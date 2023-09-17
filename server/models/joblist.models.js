const mongoose = require('mongoose');

const jobListingSchema = new mongoose.Schema({
    companyName: String,
    location: String,
    salaryRange: String,
    details: {
        companyStatus: String,
        service: String,
        class: String,
        category: String,
        activityDescription: String,
        address: String,
        contactEmail: String
    },
    applicationDeadline: String
});

const JobListing = mongoose.model('JobListing', jobListingSchema);

module.exports = JobListing;



