const jwt = require('jsonwebtoken');
const config = require('config');

const { promisify } = require('util');

const User = require('../models/user.model');

const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

const createAndSendToken = (id, resp) => {
  const token = jwt.sign({ id }, config.get('JWT.SECRET_KEY'), { expiresIn: config.get('JWT.EXPIRES_IN') });

  return resp.status(200).json({
    status: 'success',
    data: {
      token,
    },
  });
};

exports.signUp = catchAsync(async (req, resp, next) => {
  const { email, password, passwordConfirm, username, address } = req.body;

  const newUser = await User.create({ email, password, passwordConfirm, username, address });

  return createAndSendToken(newUser.id, resp);
});

exports.login = catchAsync(async (req, resp, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide an valid email and password', 400));
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user || !user.active || !(await user.comparePasswords(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  return createAndSendToken(user.id, resp);
});

exports.protect = catchAsync(async (req, resp, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } else {
    return next(new AppError('Please provide a valid token', '400'));
  }

  const decoded = await promisify(jwt.verify)(token, config.get('JWT.SECRET_KEY'));

  const currentUser = await User.findById(decoded.id);

  if (!currentUser || !currentUser.active) {
    return next(new AppError('User do not exits', '404'));
  }

  req.user = currentUser;
  resp.locals.user = currentUser;
  next();
});

exports.restrictTo = (...roles) => (req, resp, next) => {
  if (!roles.includes(req.user.roles)) {
    return next(new AppError('Unauthorized', '403'));
  }
  return next();
};
