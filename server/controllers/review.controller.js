const Review = require('../models/review.model');
const handlerFactory = require('./handlerFactory');


exports.createReview = handlerFactory.createOne(Review)

exports.getAllReviews = handlerFactory.getAll(Review);

exports.getReview = handlerFactory.getOne(Review)