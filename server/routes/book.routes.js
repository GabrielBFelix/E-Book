const express = require('express');

const router = express.Router({ mergeParams: true });

const reviewRouter = require('./review.routes');

const {
  createBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
  getTopFiveBooks,
} = require('../controllers/book.controller');

const { protect } = require('../controllers/auth.controller');

router.route('/').get(getAllBooks).post(protect, createBook);

router.route('/topFiveBooks').get(protect, getTopFiveBooks, getAllBooks);

router.route('/:bookId').get(getBook).patch(protect, updateBook).delete(protect, deleteBook);

router.use('/:book/reviews', reviewRouter);

module.exports = router;
