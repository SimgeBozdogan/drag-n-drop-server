const Review = require('./review.model');
const User = require('../user/user.model');

const getAllReviews = async () => {
  const reviews = await Review.find({});

  let response = [];

  for (const review of reviews) {
    const user = await User.findOne({ _id: review.userId });
    response.push({
      _id: review._id,
      content: review.content,
      title: review.title,
      rating: review.rating,
      userName: user.userName,
    });
  }

  return response;
}

const createReview = async (request) => {
  const newReview = new Review(request);

  newReview.save(function (error) {
    if (error) {
      console.log('Error while saving review: ' + error);
      throw new Error(error);
    }
  });

  const user = await User.findOne({ _id: request.userId });

  return {
    _id: newReview._id,
    content: newReview.content,
    title: newReview.title,
    rating: newReview.rating,
    userName: user.userName,
  };
}

module.exports = { getAllReviews, createReview };
