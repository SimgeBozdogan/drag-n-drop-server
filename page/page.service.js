const Page = require('./page.model');
const customErrors = require('../custom.errors');

const getPagesByWebsiteId = async (websiteId) => {
  const pages = await Page.find({ websiteId });
  return pages;
}

const createPage = async (request) => {
  const newPage = new Page(request);
  
  newPage.save(function (error) {
    if (error) {
      console.log('Error while creating page: ' + error);
      throw new Error(error);
    }
  });

  return newPage;
}

const deletePage = async (pageId) => {
  await Page.deleteOne({ _id: pageId }, function (error) {
    if (error) {
      console.log('Error while deleting page: ' + error);
      throw new Error(error);
    }
  });
}

const saveGrapesjsChanges = async (pageId, request) => {
  await Page.updateOne(
    { _id: pageId }, // Conditions
    { $set: request }, // Updates
    function (error) {
      if (error) {
        console.log('Error while saving changes: ' + error);
        throw new Error(error);
      }
    },
  );
}

const loadGrapesjsContent = async (pageId) => {
  const page = await Page.findOne({ _id: pageId });

  if(!page) {
    throw new customErrors.DragNDropError(`There is no grapesjs editor content!`, { statusCode: 404 });
  } 

  return page;
}

module.exports = { getPagesByWebsiteId, createPage, deletePage, saveGrapesjsChanges, loadGrapesjsContent };
