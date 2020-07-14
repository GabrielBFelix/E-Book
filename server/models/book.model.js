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

    author: [
      {
        type: String,
        required: [true, 'Please provide the author name'],
      },
    ],

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

    genres: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],

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

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
