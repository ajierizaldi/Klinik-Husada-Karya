const express = require('express');
const router = express.Router();

// route login
router.get('/', (req, res) => {
    res.render('pages/profile');
});

module.exports = router;