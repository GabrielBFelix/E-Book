const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../models/user.models');

const catchAsync = require('../utils/catchAsync');


exports.signUp = catchAsync(async (req, resp, next) => {
  const { email, password, passwordConfirm, username, address } = req.body;

  const newUser = await User.create({ email, password, passwordConfirm, username, address });

  const token = jwt.sign({ newUser }, config.get('JWT.SECRET_KEY'), { expiresIn: config.get('JWT.EXPIRES_IN') });

  return resp.status(200).json({
    status: 'success',
    token,
    data: {
      newUser,
    },
  });
});

exports.login = catchAsync(async (req, resp, next) => {
  console.log(req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide an valid email and password', 400));
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user || (await !user.comparePasswords(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  const token = jwt.sign({ id: user._id }, config.get('JWT.SECRET_KEY'), { expiresIn: config.get('JWT.EXPIRES_IN') });

  return resp.status(200).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
});