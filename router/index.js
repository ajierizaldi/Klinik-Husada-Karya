const express = require('express');
const router = express.Router();

const medicineRoute = require('./medicineRoute');
const patientRoute = require('./patientRoute');
const userRoute = require('./userRoute');

// login page
router.get('/login', (req, res) => {
    res.render('pages/login');
});

// main dashboard
router.get('/', (req, res) => {
    res.render('pages/index');
});

// patient page
router.use('/patient', patientRoute);

// addPasien page
router.get('/addPatient', (req, res) => {
    res.render('pages/addPasienPage');
});

// medicine page
router.use('/medicine', medicineRoute);

router.get('/addMedicine', (req, res) => {
    res.render('pages/addObatPage');
});

// statistic page
router.get('/statistic', (req, res) => {
    res.render('pages/statisticPage');
});

// profile page
router.use('/profile', userRoute);

// test api
router.get('/check-health', (req, res) => {
    res.send('Server is running');
})

// route login
// router.use('/user', userRoute);

// router.use('/medicine', medicineRoute);
// router.use('/patient', patientRoute);

module.exports = router;