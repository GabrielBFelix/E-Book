const express = require('express');

const router = express.Router({ mergeParams: true });

const reviewRouter = require('./review.routes');

const { createBook, getAllBooks, getBook, updateBook, deleteBook } = require('../controllers/book.controller');

const { protect } = require('../controllers/auth.controller');

router.route('/').get(getAllBooks).post(protect, createBook);

router.route('/:bookId').get(protect, getBook).patch(protect, updateBook).delete(protect, deleteBook);

router.use('/:book/reviews', reviewRouter);

module.exports = router;
