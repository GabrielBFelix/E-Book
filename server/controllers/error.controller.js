const config = require('config');

const AppError = require('../utils/AppError');

const handleDuplicateKeyError = (err) => {
  const [duplicatedField] = Object.keys(err.keyValue);

  return new AppError(`Duplicated field : ${duplicatedField}`, '400');
};

const handleCastError = (err) => {
  return new AppError(`Invalid book id : ${err.value}`, '400');
};

const handleTokenExpiredError = () => new AppError('Token has expired, please loggin again', '401');

const handleJWTError = () => new AppError('Invalid token', '400');

const handleValidationErrorDB = err => {
  const errors = Object.values(err.errors).map(el => el.message);

  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const sendErrorDev = (err, resp) => {
  console.log(err);

  return resp.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    err: err,
  });
};

module.exports = (err, req, resp, next) => {
  const enviroment = config.get('NODE_ENV');

  let error = { ...err };

  error.statusCode = err.statusCode || 500;
  error.message = err.message || 'Something wrong happened';

  // if (err.code === 11000) err = handleDuplicateKeyError(err);
  if (err.name === 'TokenExpiredError') error = handleTokenExpiredError();
  if (err.name === 'JsonWebTokenError') error = handleJWTError();
  if (err.kind === 'ObjectId') error = handleCastError(err);
  if (err.code === 11000) error = handleDuplicateKeyError(err);
  if (err.name === 'ValidationError') error = handleValidationErrorDB(err);

  if (enviroment === 'development') {
    sendErrorDev(error, resp);
  }
};
