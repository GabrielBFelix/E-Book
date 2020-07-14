const Book = require('../models/book.model');
const factory = require('./handlerFactory');

exports.createBook = factory.createOne(Book);

exports.getAllBooks = factory.getAll(Book);
