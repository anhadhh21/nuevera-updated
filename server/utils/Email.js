const nodemailer = require('nodemailer');
const User = require('../models/user.model');
const cron = require('node-cron');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ users });
    } catch (error) {
        res.status(400).json({ error });
    }
};


const gmailContent = (jobTitle) => {
    return `
<h1>New Job Opportunity: ${jobTitle}</h1>
<p>Hello,</p>
<p>We are excited to inform you about a new job opportunity that matches your expertise:</p>
<p>Job Title: ${jobTitle}</p>
<p>Company: [Your Company Name]</p>
<p>Location: [Job Location]</p>
<p>Application Deadline: [Deadline Date]</p>
<p>Description:</p>
<p>[Job Opportunity Description]</p>
<p>If you are interested in this position and believe you are a good fit, you can find more details and submit your application on our website: [Application Link]</p>
<p>Thank you for your continued interest in our company and the work we do. We look forward to receiving your application.</p>
<p>Best regards,<br/>[Your Name]<br/>[Your Title]<br/>[Company Name]</p>
`;
};


const sendNotification = async (recipientEmail, jobTitle) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        const emailContent = gmailContent(jobTitle);

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: recipientEmail,
            subject: 'New Job Opportunity: ' + jobTitle,
            html: emailContent,
        });

        console.log("Email has been sent  " + recipientEmail);
    } catch (error) {
        console.log(error);
    }
};

const jobTitles = ['Web Developer'];

const scheduleNotifications = async () => {

    try {
        const users = await User.find({});

        users.forEach((user) => {
            if (jobTitles.includes(user.jobTitle)) {
                console.log(user.email);
                sendNotification(user.email, user.jobTitle);
            }
        });
    } catch (error) {
        console.log(error);
    }

};


module.exports = { getAllUsers, sendNotification, scheduleNotifications };
