
const JobListing = require('../models/joblist.models')

const creatJob = async (req, res) => {
    const {
        companyName,
        location,
        salaryRange,
        details,
        applicationDeadline,
        companyStatus,
        service,

        activityDescription,
        address,
        contactEmail,
    } = req.body

    try {

        const createNewJob = await JobListing.create({
            companyName,
            location,
            salaryRange,
            details,
            applicationDeadline,
            companyStatus,
            service,

            activityDescription,
            address,
            contactEmail,

        })

        res.status(201).json({
            message: "Job created successfully",
            createNewJob
        })



    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error
        })
    }
}

const searchJobsByLocation = async (req, res) => {
    const location = req.query.location;

    try {
        const jobs = await JobListing.find({ location: { $regex: location, $options: 'i' } });
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
}

const filterJobsByService = async (req, res) => {
    const service = req.query.service;

    try {
        const jobs = await JobListing.find({ 'details.service': service });
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
}


module.exports = {
    creatJob,
    searchJobsByLocation,
    filterJobsByService

}