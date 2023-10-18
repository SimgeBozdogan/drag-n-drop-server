/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *        - userName
 *        - email
 *        - password
 *       properties:
 *         userName:
 *           type: string
 *           description: The user name
 *         email:
 *           type: string
 *           description: The user email
 *         password:
 *           type: string
 *           description: The user password
 *       example:
 *         userName: 'semihataman'
 *         email: 'semihataman16@gmail.com'
 *         password: '2a$10$9MJmPugtiDDfq5F/XdnpJeYtGYyxquopaghX1uzyTFLMCfoDFbj3s'
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * 
 * /api/user/register:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User registered successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 * 
 * /api/user/login:
 *   post:
 *     summary: Login user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *              email: 
 *                type: string
 *              password:
 *                type: string
 *           example:
 *             email: semihataman16@gmail.com
 *             password: '1234'
 *     responses:
 *       200:
 *         description: Login is successfull.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */

const mongoose = require('mongoose');

const User = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },

    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Users', User);