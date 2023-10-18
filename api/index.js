const express = require('express');
const swaggerUi = require('swagger-ui-express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('../user/user.route');
const websiteRoute = require('../website/website.route');
const pageRoute = require('../page/page.route');
const reviewRoute = require('../review/review.route');
const errorMiddleware = require('../middleware/errorMiddleware');
const swaggerJsdoc = require("swagger-jsdoc");
require('dotenv').config();
require('babel-register');


//Initialize App
const app = express();
app.use(express.json());
const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
};

corsOptions.credentials = true;
app.use(cors(corsOptions));

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "dragn-drop-server",
      version: "1.0.0",
      description:
        "Express.js and MongoDb Backend API",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Semih Ataman",
        email: "semihataman16@gmail.com",
      },
    },
    servers: [
      {
        url: '/',
      },
    ],
  },
  apis: ["./page/*.js", "./review/*.js", "./user/*.js", "./website/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

// //HTML and Static file
// app.use('/resources', express.static(path.join(__dirname, 'public')));
// app.set('views', `views`);


const mongoUri = process.env.MONGODB_URL;
mongoose.connect(
  mongoUri,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) throw error;
    console.log('Connected to MongoDB');
  },
);

app.use('/api/user', userRoute)
app.use('/api/website', websiteRoute)
app.use('/api/page', pageRoute);
app.use('/api/review', reviewRoute);
app.use('/api/healthCheck', (req, res) => {
  res.status(200).json({ message: 'Server is running!' });
});
app.use('*', (request, response) => {
  response.status(404).json({ message: 'Route not found!' });
});

app.use(errorMiddleware.errorLogger);
app.use(errorMiddleware.errorResponder);

const LOCAL_PORT = 8081;
const PORT = process.env.APP_PORT || LOCAL_PORT;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
