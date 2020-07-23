const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  book: {
    type: mongoose.Types.ObjectId,
    ref: 'Book',
    required: [true, 'A booking must have one or more books'],
  },

  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'A booking must belong to a user'],
  },

  price: {
    type: Number,
    required: [true, 'A booking must have a price'],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  paid: {
    type: Boolean,
    default: true,
  },
});

bookingSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name email ',
  }).populate({
    path: 'book',
    select: 'name',
  });

  return next();
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
