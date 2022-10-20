const express = require('express');
const router = express.Router();
const { list, create, update, destroy } = require('../controllers/medicineControllers');

router.get('/', list);
router.post('/create', create);
router.put('/update', update);
router.delete('/destroy', destroy);

module.exports = router;