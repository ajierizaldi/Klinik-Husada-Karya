require('dotenv').config();
const axios = require('axios');
const express = require('express');
const router = express.Router();
const { list, create, update, destroy } = require('../controllers/medicineControllers');

router.get('/', (req, res) => {
    res.render('pages/medicinePage');
});

router.get('/list', list);
router.post('/create', create);
router.put('/update', update);
router.delete('/destroy', destroy);

module.exports = router;