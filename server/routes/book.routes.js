const express = require('express');

const router = express.Router();

const reviewRouter = require('./review.routes');

const { createBook, getAllBooks, getBook } = require('../controllers/book.controller');

const { protect } = require('../controllers/auth.controller');

router.route('/').get(getAllBooks).post(protect, createBook);

router.route('/:id').get(protect, getBook);

router.use('/:book/reviews', reviewRouter);

module.exports = router;
