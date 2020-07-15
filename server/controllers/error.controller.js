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

const sendErrorDev = (err, resp) => {
  return resp.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    err: err,
  });
};

module.exports = (err, req, resp, next) => {
  const enviroment = config.get('NODE_ENV');

  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Something wrong happened';

  if (err.code === 11000) err = handleDuplicateKeyError(err);
  if (err.name === 'TokenExpiredError') err = handleTokenExpiredError();
  if (err.name === 'JsonWebTokenError') err = handleJWTError();
  if (err.kind === 'ObjectId') err = handleCastError(err);

  if (enviroment === 'development') {
    sendErrorDev(err, resp);
  }
};
