const Book = require('../models/book.model');
const factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const config = require('config');
const stripe = require('stripe')(config.get('STRIPE.SECRET_KEY'));

exports.getCheckoutSession = catchAsync(async (req, resp, next) => {
  const orderedBooksIds = [];

  const books = await Promise.all(
    req.body.books.map(async (orderedBook) => {
      try {
        const book = await Book.findById(orderedBook.id);
        orderedBooksIds.push(orderedBook.id);
        return {
          name: book.name,
          description: book.description,
          amount: book.price * 100,
          currency: 'usd',
          quantity: orderedBook.quantity,
        };
      } catch (error) {
        console.log(error);
      }
    })
  );

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `${req.protocol}://${req.get('host')}/`,
    cancel_url: `${req.protocol}://${req.get('host')}/books/`,
    customer_email: req.user.email,
    client_reference_id: orderedBooksIds,
    line_items: books,
  });

  return resp.status(200).json({
    status: 'success',
    session,
  });
});
