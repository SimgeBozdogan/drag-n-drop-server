/**
 * @swagger
 * components:
 *   schemas:
 *     Page:
 *       type: object
 *       required: 
 *        - name
 *        - websiteId
 *       properties:
 *         name:
 *           type: string
 *           description: The page name
 *         content:
 *           type: object
 *           description: Website codes includes HTML and CSS
 *         websiteId:
 *           type: string
 *           description: The id of the website
 *       example:
 *         name: 'About'
 *         content:
 *          assets: []  
 *          styles: []
 *          pages: [{frames: [{component: {type: wrapper, stylable: [background, background-color, background-image, background-repeat, background-attachment, background-position, background-size]}}], id: 6492bbd8d1bcb523485884c5 }]
 *         websiteId: '6492bba9d1bcb523485884c0'
 */

/**
 * @swagger
 * tags:
 *   name: Pages
 *   description: The pages managing API
 * 
 * /api/page/createPage:
 *   post:
 *     summary: Create a new page
 *     tags: [Pages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               name:
 *                 type: string
 *               websiteId:
 *                 type: string
 *           example:
 *             name: 'About'
 *             websiteId: '6492bba9d1bcb523485884c0'   
 *     responses:
 *       200:
 *         description: Page created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Page'
 *       500:
 *         description: Some server error
 * 
 * /api/page/getPagesByWebsiteId/{websiteId}:
 *   get:
 *     summary: Get pages by website id
 *     tags: [Pages]
 *     parameters:
 *       - in: path
 *         name: websiteId
 *         schema:
 *           type: string
 *         required: true
 *         description: The website id
 *     responses:
 *       200:
 *         description: Pages fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Page'
 *       500:
 *         description: Some server error
 * 
 * /api/page/deletePage/{pageId}:
 *   delete:
 *     summary: Delete page by page id
 *     tags: [Pages]
 *     parameters:
 *       - in: path
 *         name: pageId
 *         schema:
 *           type: string
 *         required: true
 *         description: The page id
 *     responses:
 *       200:
 *         description: Page deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Page'
 *       500:
 *         description: Some server error
 * 
 * /api/page/saveGrapesjsChanges/{pageId}:
 *   patch:
 *     summary: Save grapesjs changes by page id
 *     tags: [Pages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               content:
 *                 type: object
 *           example:
 *             content: {}
 *     parameters:
 *       - in: path
 *         name: pageId
 *         schema:
 *           type: string
 *         required: true
 *         description: The page id
 *     responses:
 *       200:
 *         description: Changes saved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Page'
 *       500:
 *         description: Some server error
 * 
 * /api/page/loadGrapesjsContent/{pageId}:
 *   get:
 *     summary: Load grapesjs content by page id
 *     tags: [Pages]
 *     parameters:
 *       - in: path
 *         name: pageId
 *         schema:
 *           type: string
 *         required: true
 *         description: The page id
 *     responses:
 *       200:
 *         description: Grapesjs content fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Page'
 *       500:
 *         description: Some server error
 * 
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Page = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    content: Object,
    websiteId: {
      type: Schema.Types.ObjectId,
      ref: 'Website',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Pages', Page);
