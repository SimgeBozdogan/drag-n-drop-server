const fs = require('fs');

const INTERNAL_SERVER_ERROR = 500;
const FILE = 'error.log';

const appendFileAsync = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(file, data, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

// express-async-handler redirects to errorLogger middleware when an error occurs
const errorLogger = (error, request, response, next) => {
  const { message, options } = error;
  let status = INTERNAL_SERVER_ERROR;

  if (options && options.hasOwnProperty('statusCode')) {
    status = options.statusCode;
  }

  const dateTime = new Date();
  const fileContent = dateTime + ' -> ' + JSON.stringify({ status, data: request.body, message }) + '\n';
  appendFileAsync(FILE, fileContent);

  // Redirect to errorResponder middleware
  next(error);
}

// errorLogger middleware calls next(error) which redirects to errorResponder middleware
const errorResponder = (error, request, response, next) => {
  const { message, options } = error;
  let status = INTERNAL_SERVER_ERROR;

  if (options && options.hasOwnProperty('statusCode')) {
    status = options.statusCode;
  }

  response.status(status).json({ data: request.body, message });
}

module.exports = { errorLogger, errorResponder };