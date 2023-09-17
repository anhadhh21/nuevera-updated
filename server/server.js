const express = require('express');
require('dotenv').config();
const db = require('./db');
const userRoutes = require('./routes/user.routes')
const quizRoutes = require('./routes/quiz.routes')
const resumeRoutes = require('./routes/resume.routes')
const jobRoutes = require('./routes/job.routes')
const contactRoutes = require('./routes/contact.routes')
const cors = require('cors');
const bodyParser = require('body-parser');
const { scheduleNotifications } = require('./utils/Email')
const cron = require('node-cron');
const app = express();


const Port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());


app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

db.myDb();

app.listen(Port, () => {
    console.log(`Server is running on the port ${Port}`);
}
)

cron.schedule('22 12 * * *', () => {
    console.log('running a task every minute');
    scheduleNotifications();
})

app.use('/api/v1/user', userRoutes)
app.use('/api/v1/quiz', quizRoutes)
app.use('/api/v1/job', jobRoutes)
app.use('/api/v1/contact', contactRoutes)
app.use('/api/v1/resume', resumeRoutes)

