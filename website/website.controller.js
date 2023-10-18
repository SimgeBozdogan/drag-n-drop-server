const asyncHandler = require("express-async-handler");
const WebsiteService = require('./website.service');

const getWebsitesByUserId = asyncHandler(async (req, res, next) => {
  const websites = await WebsiteService.getWebsitesByUserId(req.params.userId);
  return res.status(200).json({ data: websites, message: 'Websites fetched successfully.' });
});

const createWebsite = asyncHandler(async (req, res, next) => {
  const newWebsite = await WebsiteService.createWebsite(req.body);
  return res.status(200).json({ data: newWebsite, message: 'Website created successfully.' });
});

module.exports = { getWebsitesByUserId, createWebsite };
