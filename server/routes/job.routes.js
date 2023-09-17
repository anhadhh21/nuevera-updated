const express = require('express')
const router = express.Router()
const { createJob, getJobById, getJobs, searchJob } = require('../controllers/job.controllers')


router.post('/create', createJob)
router.get('/getJobs', getJobs)
router.get('/getJobById/:jobId', getJobById)
router.get('/searchJob', searchJob)

module.exports = router


