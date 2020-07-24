const Book = require('../models/book.model');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const ApiFeatures = require('../utils/APIFeatures');


const filterObj = (obj, allowedFields) => {
  const newObj = {};

  Object.keys(obj).forEach((key) => {
    if (allowedFields.includes(key)) {
      newObj[key] = obj[key];
    }
  });
  console.log(newObj)
  return newObj;
};

exports.createBook = catchAsync(async (req, resp, next) => {
  const allowedFields = ['name', 'publisher', 'description', 'author', 'price', 'images', 'quantity', 'genre'];

  const fields = filterObj(req.body, allowedFields);
  fields.seller = req.user.id;

  const newDoc = await Book.create(fields);

  return resp.status(201).json({
    status: 'success',
    data: {
      newDoc,
    },
  });
});

exports.getAllBooks = catchAsync(async (req, resp, next) => {
  let filter = {};

  if (req.params.userId) filter.seller = req.params.userId;

  let apiFeatures = new ApiFeatures(Book.find(filter), req.query).filter().sort().limitFields().paginate();

  const docs = await apiFeatures.query;

  return resp.status(200).json({
    status: 'succed',
    results: docs.length,
    data: {
      docs,
    },
  });
});

exports.getBook = catchAsync(async (req, resp, next) => {
  const filters = { _id: req.params.bookId };

  if (req.params.userId) filters.seller = req.params.userId;

  let query = Book.find(filters);

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

exports.updateBook = catchAsync(async (req, resp, next) => {
  const { bookId } = req.params;
  const userId = req.user.id;

  const allowedFieds = ['quantity', 'genres', 'price', 'description']

  const filteredBody = filterObj(req.body, allowedFieds);

  // const book = await Book.findOne({ _id: bookId, seller: userId });

  const book = await Book.findOneAndUpdate({ _id: bookId, seller: userId }, filteredBody, { new: true });

  if (!book) {
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
