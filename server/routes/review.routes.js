const express = require('express');

const router = express.Router({ mergeParams: true });

const { createReview, getAllReviews, getReview } = require('../controllers/review.controller');

router.route('/').get(getAllReviews).post(createReview);
router.route('/:id').get(getReview);

module.exports = router;
