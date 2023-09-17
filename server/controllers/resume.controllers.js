const Resume = require('../models/resume.models');
const User = require('../models/user.model');

const createResume = async (req, res) => {
    const {
        fullName,
        email,
        phone,
        address,
        education,
        date1,
        date2,
        education2,
        workExperience,
        skills,
        projects,
        portfolioLinks,
        achievements,

    } = req.body
    try {
        //add validation
        if (!fullName || !email || !phone || !address || !education || !date1 || !date2 || !education2 || !workExperience || !skills || !projects || !portfolioLinks || !achievements) {
            return res.status(400).json({
                message: "Please fill all the fields"
            })
        }
        const user = req.user;
        console.log(user)
        const existingUser = await User.findById(user);
        if (!existingUser) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        const getExistingResume = await Resume.find({ user: user });
        if (getExistingResume.length > 0) {
            for (let i in getExistingResume) {
                await Resume.findByIdAndDelete(getExistingResume[i]._id)
            }
        }
        const newResume = await new Resume({
            user,
            fullName,
            email,
            phone,
            address,
            education,
            date1,
            date2,
            education2,
            workExperience,
            skills,
            projects,
            portfolioLinks,
            achievements,
        })
        await newResume.save()
        res.status(201).json({
            message: "Resume created successfully",
            newResume
        })
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}


const getResume = async (req, res) => {
    try {
        const user = req.user;
        const existingUser = await User.findById(user)
        if (!existingUser) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        const resume = await Resume.find({ user: user })
        const resumeQty = resume.length
        res.status(200).json({
            resume, resumeQty
        })
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}



module.exports = {
    createResume,
    getResume
}

