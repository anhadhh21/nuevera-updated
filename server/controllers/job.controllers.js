const Job = require('../models/job.model')

// Create and Save a new Job
const createJob = async (req, res) => {
    const {
        jobTitle,
        jobDescription,
        jobLocation,
        jobType,
        jobCategory,
        jobSalary,
        jobExperience,
        jobQualification,
        jobSkills

    } = req.body
    try {
        const job = new Job({
            jobTitle,
            jobDescription,
            jobLocation,
            jobType,
            jobCategory,
            jobSalary,
            jobExperience,
            jobQualification,
            jobSkills

        })
        await job.save()
        res.status(201).json({ message: "Job created successfully", job: job })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}



const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        if (!jobs) {
            return res.status(404).json({ message: "Jobs not found" })
        }
        const qty = jobs.length
        res.status(200).json({
            qty,
            jobs
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getJobById = async (req, res) => {
    const { jobId } = req.params
    try {
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({ message: "Job not found" })
        }
        res.status(200).json(job)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const searchJob = async (req, res) => {
    const { jobTitle, location, category } = req.query;
    const searchQuery = {};
    if (jobTitle) {
        searchQuery.jobTitle = jobTitle;
    }
    if (location) {
        searchQuery.location = location;
    }
    if (category) {
        searchQuery.category = category;
    }

    try {
        const jobs = await Job.find(searchQuery);

        if (jobs.length === 0) { // Check if no jobs were found
            return res.status(404).json({ message: "No jobs found" });
        }

        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    createJob,
    getJobs,
    getJobById,
    searchJob
}

