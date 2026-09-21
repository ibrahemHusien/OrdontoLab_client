const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.get('/', companyController.getCompany);
router.put('/', companyController.updateCompany);
router.post('/visit', companyController.trackVisit);

module.exports = router;