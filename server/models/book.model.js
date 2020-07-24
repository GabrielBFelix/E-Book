const mongoose = require('mongoose');
const validator = require('validator');
const slugify = require('slugify');
const bcrypt = require('bcryptjs');

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name for the book'],
    },

    publisher: {
      type: String,
      required: [true, 'Please provide a publisher'],
    },

    description: {
      type: String,
      required: [true, 'Please provide a description'],
    },

    author: {
      type: String,
      required: [true, 'A book must belong to one author']
    },

    price: {
      type: Number,
      required: [true, 'Please provide a price'],
    },

    images: [String],

    slug: String,

    createdAt: {
      type: Date,
      default: Date.now,
    },

    quantity: {
      type: Number,
      default: 0,
    },

    ratingsQuantity: {
      type: Number,
      default: 0,
    },

    ratingsAverage: {
      type: Number,
      default: 5,
    },

    genre: {
      type: String,
      required: [true, 'A book must have a genre'],
      trim: true,
    },

    seller: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide the seller name'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

bookSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });

  return next();
});

bookSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'book',
});

bookSchema.pre(/find/, function () {
  this.populate({
    path: 'reviews',
    select: 'review rating',
  });
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
