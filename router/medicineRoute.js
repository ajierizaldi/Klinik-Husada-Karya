const express = require('express');
const router = express.Router();
// const { list, create, update, destroy } = require('../controllers/medicineControllers');

router.get('/', (req, res) => {
    res.render('pages/medicine');
});




// router.get('/', list);
// router.post('/create', create);
// router.put('/update', update);
// router.delete('/destroy', destroy);

module.exports = router;