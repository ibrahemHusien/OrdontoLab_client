const express = require('express');
const router = express.Router();
const founderController = require('../controllers/founderController');

router.get('/', founderController.getFounder);
router.put('/', founderController.updateFounder);

module.exports = router;