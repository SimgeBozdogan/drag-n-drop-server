/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       required:
 *        - title
 *        - rating
 *        - userId
 *       properties:
 *         title:
 *           type: string
 *           description: The rating title
 *         content:
 *           type: string
 *           description: The rating content
 *         rating:
 *           type: number
 *           description: The rating of the review
 *         userId:
 *           type: string
 *           description: The id of the user
 *       example:
 *         title: 'Georgeous!'
 *         content: 'This is a great website'
 *         rating: 5
 *         userId: '6492bba9d1bcb523485884c0'
 */

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: The reviews managing API
 * 
 * /api/review/getAllReviews:
 *   get:
 *     summary: Returns the list of all the reviews
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: Reviews fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       500:
 *         description: Some server error
 * 
 * /api/review/createReview:
 *   post:
 *     summary: Create a new review
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       200:
 *         description: Review created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       500:
 *         description: Some server error
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Review = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    content: {
      type: String,
    },
    rating: {
      required: true,
      type: Number,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Reviews', Review); 
