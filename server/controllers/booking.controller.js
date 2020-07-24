const Booking = require('../models/booking.model');
const factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const config = require('config');
const APIFeatures = require('../utils/APIFeatures');
const stripe = require('stripe')(config.get('STRIPE.SECRET_KEY'));

exports.getCheckoutSession = catchAsync(async (req, resp, next) => {
  const { book } = req.body;

  const order = {
    name: book.name,
    description: book.description,
    amount: book.price * 100,
    currency: 'usd',
    quantity: 1,
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: config.get('REDIRECT_DOMAIN'),
    cancel_url: `${req.protocol}://${req.get('host')}/book/${book._id}`,
    customer_email: req.user.email,
    client_reference_id: book._id,
    line_items: [order],
  });

  await Booking.create({ book, user: req.user._id, price: order.amount });

  return resp.status(200).json({
    status: 'success',
    session,
  });
});

exports.getAllBookings = catchAsync(async (req, resp, next) => {
  const features = new APIFeatures(Booking.find({ user: req.user.id }), req.query).filter().sort().limitFields();

  const bookings = await features.query;

  return resp.status(200).json({
    status: 'success',
    data: {
      bookings,
    },
  });
});
