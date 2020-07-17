const Book = require('../models/book.model');
const factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};

  Object.keys(obj).forEach((key) => {
    if (allowedFields.includes(key)) {
      newObj[key] = obj[key];
    }
  });

  return newObj;
};

exports.createBook = factory.createOne(Book);

exports.getAllBooks = factory.getAll(Book);

exports.getBook = factory.getOne(Book);

exports.updateBook = catchAsync(async (req, resp, next) => {
  const { bookId } = req.params;
  const userId = req.user.id;

  const filteredBody = filterObj(req.body, 'quantity', 'genres', 'price', 'description');

  const query = Book.updateOne({ _id: bookId, seller: userId }, filteredBody);

  const book = await query;

  if (!book.nModified) {
    return next(new AppError(`Book doesn't exist or doesn't belong to this user`, 404));
  }

  return resp.status(202).json({
    status: 'success',
    data: book,
  });
});

exports.deleteBook = catchAsync(async (req, resp, next) => {
  const { bookId } = req.params;
  const userId = req.user.id;

  await Book.deleteOne({ _id: bookId, seller: userId });

  return resp.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.getTopFiveBooks = (req, resp, next) => {
  req.query.limit = 5;
  req.query.sort = '-ratingsAverage,createdAt';
  req.query.fields = 'name,author,description';
  return next();
};
