const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeControllers');

router.get('/', homeController.getHomePage);

module.exports = router;