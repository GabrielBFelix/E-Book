const mongoose = require('mongoose');
const validator = require('validator');

const Book = require('./book.model');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      min: 1,
      max: 10,
      default: 5,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'A review must belong to a user'],
    },

    book: {
      type: mongoose.Types.ObjectId,
      ref: 'Book',
      required: [true, 'A review must belong to a book'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.index({ user: 1, book: 1 });

reviewSchema.statics.calcAvgRatings = async function (bookId) {
  const [stats] = await this.aggregate(
    { $match: { book: bookId } },

    { $group: { _id: '$book', avgRating: { $avg: '$rating' }, nRating: { $sum: 1 } } }
  );

  if (stats) {
    const { avgRating, nRating } = stats;
    await Book.findByIdAndUpdate(bookId, { ratingsQuantity: nRating, ratingsAverage: avgRating });
  } else {
    await Book.findByIdAndUpdate(bookId, { ratingsQuantity: 0, ratingsAverage: 5 });
  }
};

reviewSchema.post('save', function () {
  this.constructor.calcAvgRatings(this.book);
});

reviewSchema.pre(/^findOneAnd/, async function (next) {
  this.r = await this.findOne();
  // console.log(this.r);
  next();
});

reviewSchema.post(/^findOneAnd/, async function () {
  // await this.findOne(); does NOT work here, query has already executed
  await this.r.constructor.calcAverageRatings(this.r.book);
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
