const express = require('express')
const router = express.Router()

const { createJob, searchJobsByLocation, filterJobsByService } = require('../controllers/joblist.controllers')


router.post('/createjob', createJob)
router.get('/search', searchJobsByLocation)
router.get('/filter', filterJobsByService)


module.exports = router