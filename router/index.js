const express = require('express');
const router = express.Router();

// const medicineRoute = require('./medicineRoute');
// const patientRoute = require('./patientRoute');
// const userRoute = require('./userRoute');


// main dashboard
router.get('/', (req, res) => {
    res.render('pages/index');
});

// login page
router.get('/login', (req, res) => {
    res.render('pages/login');
});

// medicine page
router.get('/medicine', (req, res) => {
    res.render('pages/medicinePage');
});

// patient page
router.get('/patient', (req, res) => {
    res.render('pages/pasienPage');
});

// statistic page
router.get('/statistic', (req, res) => {
    res.render('pages/statisticPage');
});

// profile page
router.get('/profile', (req, res) => {
    res.render('pages/profile');
});

// test api
router.get('/check-health', (req, res) => {
    res.send('Server is running');
})

// route login
// router.use('/user', userRoute);

// router.use('/medicine', medicineRoute);
// router.use('/patient', patientRoute);

module.exports = router;