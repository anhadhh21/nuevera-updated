const Contact = require('../models/contact.model')



const createContact = async (req, res) => {
    const { name, subject, email, message } = req.body
    try {
        const contact = await Contact.create({
            name,
            email,
            subject,
            message

        });
        res.status(201).json({ msg: "contact created succesfully", contact: contact });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getContact = async (req, res) => {
    try {
        const contact = await Contact.find();
        res.status(200).json({ contact: contact });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createContact,
    getContact
}