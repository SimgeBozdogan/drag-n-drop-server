const User = require('./user.model');
const bcrypt = require('bcryptjs');
const customErrors = require('../custom.errors');

const SALT_ROUNDS = 10;

const addUserByHashingPassword = (request) =>
  function (error, hash) {
    const hashedRequest = {
      userName: request.userName,
      email: request.email,
      password: hash,
    };
    const newUser = new User(hashedRequest);

    newUser.save(function (error) {
      if (error) {
        console.log('Error while saving user: ' + error);
        throw new Error(error);
      }
    });
}

const createUser = async (request) => {
  const { userName, email, password } = request;
  // Check if user exist
  const user = await User.findOne({ $or: [{ userName } , { email }] });

  if (user) {
    // This error will be caught by express-async-handler and redirected to errorLogger middleware.
    throw new customErrors.DragNDropError(`User with name: ${userName} or email: ${email} already exists!`, { statusCode: 409 });
  }

  // If the user does not exist, add a user by hashing user's password
  bcrypt.hash(password, SALT_ROUNDS, addUserByHashingPassword(request));
}

const login = async (request) => {
  const { email, password } = request;

  // Check if user exist
  const user = await User.findOne({ email });

  if(!user) {
    throw new customErrors.DragNDropError(`Invalid credentials!`, { statusCode: 401 });
  } 

  const match = await bcrypt.compare(password, user.password);

  if(!match) {
    throw new customErrors.DragNDropError(`Invalid credentials!`, { statusCode: 401 });
  } 
  
  return {
    _id: user._id,
    userName: user.userName,
    email: user.email,
  };
}

module.exports = { createUser, login };