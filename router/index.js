const express = require('express');
const router = express.Router();
// const userRoute = require('./userRoute');
const medicineRoute = require('./medicineRoute');
// const patientRoute = require('./patientRoute');

router.get('/', (req, res) => {
    res.render('index');
});

// test api
router.get('/check-health', (req, res) => {
    res.send('Server is running');
})
router.use('/medicine', medicineRoute);



module.exports = router;