const express = require('express');
const router = express.Router();
const { create, list, update, destroy } = require('../controllers/patientControllers')

// patient page
router.get('/', (req, res) => {
    res.render('pages/pasienPage');
});

// create
router.post('/create', create);
router.get('/list', list)
router.put('/update', update);
router.delete('/destroy', destroy);

module.exports = router;