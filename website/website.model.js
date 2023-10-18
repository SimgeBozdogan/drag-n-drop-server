/**
 * @swagger
 * components:
 *   schemas:
 *     Website:
 *       type: object
 *       required:
 *        - name
 *        - userId
 *       properties:
 *         name:
 *           type: string
 *           description: The website name
 *         description:
 *           type: string
 *           description: The website description
 *         userId:
 *           type: string
 *           description: The id of the user
 *       example:
 *         name: 'DragNDrop'
 *         description: 'This is website for creating websites'
 *         userId: '6492bba9d1bcb523485884c0'
 */

/**
 * @swagger
 * tags:
 *   name: Websites
 *   description: The websites managing API
 * 
 * /api/website/createWebsite:
 *   post:
 *     summary: Create a new website
 *     tags: [Websites]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Website'
 *     responses:
 *       200:
 *         description: Website created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Website'
 *       500:
 *         description: Some server error
 * 
 * /api/website/getWebsitesByUserId/{userId}:
 *   get:
 *     summary: Get websites by user id
 *     tags: [Websites]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: Websites fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Website'
 *       500:
 *         description: Some server error
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Website = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    description: {
      type: String,
    },
    // TODO: Add logo to websites
    // logo: {
    //   type: String,
    // },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Websites', Website);
