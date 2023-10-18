const asyncHandler = require('express-async-handler');
const PageService = require('./page.service');

const getPagesByWebsiteId = asyncHandler(async (req, res, next) => {
  const pages = await PageService.getPagesByWebsiteId(req.params.websiteId);
  return res.status(200).json({ data: pages, message: 'Pages fetched successfully.' });
});

const createPage = asyncHandler(async (req, res, next) => {
  const newPage = await PageService.createPage(req.body);
  return res.status(200).json({ data: newPage, message: 'Page created successfully.' });
});

const deletePage = asyncHandler(async (req, res, next) => {
  await PageService.deletePage(req.params.pageId);
  return res.status(200).json({ data: req.params, message: 'Page deleted successfully.' });
});

const saveGrapesjsChanges = asyncHandler(async (req, res, next) => {
  await PageService.saveGrapesjsChanges(req.params.pageId, req.body);
  res.status(200).json({ data: req.params, message: 'Changes saved successfully.' });
});

const loadGrapesjsContent = asyncHandler(async (req, res, next) => {
  const grapesjsContent = await PageService.loadGrapesjsContent(req.params.pageId);
  res.status(200).json({ data: grapesjsContent, message: 'Grapesjs content fetched successfully.' });
});

module.exports = { getPagesByWebsiteId, createPage, deletePage, saveGrapesjsChanges, loadGrapesjsContent };
