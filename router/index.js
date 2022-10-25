const express = require('express');
const router = express.Router();

// route obat
const medicineRoute = require('./medicineRoute');
// route pasien
// const patientRoute = require('./patientRoute');
// // route admin
// const userRoute = require('./userRoute');

// main dashboard
router.get('/', (req, res) => {
    res.render('index');
});

// route login
router.get('/login', (req, res) => {
    res.render('pages/login');
});

// test api
router.get('/check-health', (req, res) => {
    res.send('Server is running');
})
router.use('/medicine', medicineRoute);
// router.use('/patient', patientRoute);
// router.use('/user', userRoute);


module.exports = router;