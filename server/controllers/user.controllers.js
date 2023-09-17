const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const multer = require('multer');
const AWS = require('aws-sdk');
const jwt = require('jsonwebtoken');
require('dotenv').config();

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-2'
});

const s3 = new AWS.S3();

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    // limits: { fileSize: 1024 * 1024 * 10 }
}).single('resume');

const register = async (req, res) => {

    const {
        name,
        email,
        password,
        // contactNo,
        // dateOfBirth,
        // motherTongue,
        // qualification,
        // university,
        // experience,
        // jobTitle,
        // jobLocation,
        // resume
    } = req.body;

    try {
        // if (!name || !email || !password || !contactNo || !dateOfBirth || !motherTongue || !qualification || !university || !experience || !jobTitle || !jobLocation) {
        //     return res.status(400).json({ msg: "Please fill all the fields" });
        // } else if (password.length < 6) {
        //     return res.status(400).json({ msg: "Password must be at least 6 characters long" });
        // }

        const user = await User.findOne({ email: email });
        if (user) {
            return res.status(400).json({ msg: "User already exists" });
        }

        const hashedpassword = await bcrypt.hash(password, 10);

        // const params = {
        //     Bucket: 'nuvera',
        //     Key: `${Date.now()}-${req.file.originalname}`,
        //     Body: req.file.buffer,
        //     ContentType: 'application/pdf'
        // };

        // let s3Response;
        // try {
        //     // s3Response = await s3.upload(params).promise();
        // } catch (s3Error) {
        //     console.error("Error uploading file to S3:", s3Error);
        //     return res.status(500).json({ msg: "Error uploading file to S3" });
        // }

        const newUser = new User({
            name,
            email,
            password: hashedpassword,
            // contactNo,
            // dateOfBirth,
            // motherTongue,
            // qualification,
            // university,
            // experience,
            // jobTitle,
            // jobLocation,
            // resume: s3Response.Location
        });

        await newUser.save();
        return res.status(201).json({ msg: "User created successfully", user: newUser });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ msg: "Please fill all the fields" });
        }

        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ msg: "User does not exist" });
        }

        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
            return res.status(400).json({ msg: "Invalid credentials" });
        } else {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.status(200).json({ msg: "User logged in successfully", user: user, token: token });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: error.message });
    }
};


const getLoggedIn = async (req, res) => {
    try {
        const user = req.user;
        console.log(user)
        const existingUser = await User.findById(user);
        if (!existingUser) {
            return res.status(400).json({ msg: "User does not exist" })
        }
        return res.status(200).json({ msg: "User logged in successfully", user: existingUser })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: error.message });
    }
}

module.exports = {
    register,
    login,
    upload,
    getLoggedIn
};
