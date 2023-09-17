const express = require('express')
const router = express.Router()


const { createContact, getContact } = require('../controllers/contact.controllers')

router.post('/createContact', createContact)
router.get('/getContact', getContact)


module.exports = router


