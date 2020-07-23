const express = require('express');
const { protect } = require('../controllers/auth.controller');
const { getCheckoutSession, getAllBookings } = require('../controllers/booking.controller');
const router = express.Router();

router.route('/').get(protect, getAllBookings);
router.post('/checkout-session/', protect, getCheckoutSession);

module.exports = router;
