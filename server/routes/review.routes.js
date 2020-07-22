const express = require('express');

const router = express.Router({ mergeParams: true });

const { createReview, getAllReviews, getReview } = require('../controllers/review.controller');
const { protect } = require('../controllers/auth.controller');

router.route('/').get(getAllReviews).post(protect, createReview);
router.route('/:id').get(getReview);

module.exports = router;
