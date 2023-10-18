const express = require('express');
const PageController = require('./page.controller');

const router = express.Router();
router.get('/getPagesByWebsiteId/:websiteId', PageController.getPagesByWebsiteId);
router.post('/createPage', PageController.createPage);
router.delete('/deletePage/:pageId', PageController.deletePage);
router.patch('/saveGrapesjsChanges/:pageId', PageController.saveGrapesjsChanges);
router.get('/loadGrapesjsContent/:pageId', PageController.loadGrapesjsContent);

module.exports = router;