const express = require('express');
const {protect} = require('../controllers/auth.controller');
const {getCheckoutSession} = require('../controllers/booking.controller');
const router = express.Router();


router.post('/checkout-session/' , protect , getCheckoutSession )

module.exports = router;
