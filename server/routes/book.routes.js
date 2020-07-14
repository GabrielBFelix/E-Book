const express = require('express');

const router = express.Router();

const { createBook, getAllBooks } = require('../controllers/book.controller');

const { protect } = require('../controllers/auth.controller');

router.route('/').get(getAllBooks).post(protect, createBook);

module.exports = router;
