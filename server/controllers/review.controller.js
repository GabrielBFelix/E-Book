const Review = require('../models/review.model');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const ApiFeatures = require('../utils/APIFeatures');
const handlerFactory = require('./handlerFactory');

const filterObj = (obj, allowedFields) => {
  const newObj = {};

  Object.keys(obj).forEach((key) => {
    if (allowedFields.includes(key)) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};

exports.createReview = catchAsync(async (req, resp, next) => {
  const allowedFields = ['review', 'ratings', 'book'];

  const fields = filterObj(req.body, allowedFields);
  fields.user = req.user.id;

  const newDoc = await Review.create(fields);

  return resp.status(201).json({
    status: 'success',
    data: {
      newDoc,
    },
  });
});

// /api/books/book/reviews
// /api/books/
exports.getAllReviews = catchAsync(async (req, resp, next) => {
  let filter = {};

  if (req.params.book) filter.book = req.params.book;
  if (req.params.userId) filter.seller = req.params.userId;

  let apiFeatures = new ApiFeatures(Review.find(filter), req.query).filter().sort().limitFields().paginate();

  const docs = await apiFeatures.query;

  return resp.status(200).json({
    status: 'succed',
    results: docs.length,
    data: {
      docs,
    },
  });
});

exports.getReview = catchAsync(async (req, resp, next) => {
  let query = Review.findById(req.params.id);

  const doc = await query;

  if (!doc) {
    return next(new AppError('Doc not found', '404'));
  }

  return resp.status(200).json({
    status: 'success',
    data: {
      doc,
    },
  });
});
