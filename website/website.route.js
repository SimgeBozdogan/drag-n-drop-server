const express = require('express');
const WebsiteController = require('./website.controller');

const router = express.Router();

router.get('/getWebsitesByUserId/:userId', WebsiteController.getWebsitesByUserId);
router.post('/createWebsite', WebsiteController.createWebsite);

module.exports = router;
