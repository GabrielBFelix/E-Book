const User = require('../models/user.model');

const multer = require('multer');
const sharp = require('sharp');

const handlerFactory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};

  Object.keys(obj).forEach((key) => {
    if (allowedFields.includes(key)) {
      newObj[key] = obj[key];
    }
  });

  return newObj;
};

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, callback) => {
  if (file.mimetype.startsWith('image')) {
    return callback(false, true);
  } else {
    return callback(new AppError('Please update only photos', '400'), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.uploadUserPhoto = upload.single('photo');

exports.resizeUserPhoto = catchAsync(async (req, resp, next) => {
  if (!req.file) return next();

  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);

  return next();
});


exports.getMe = (req, resp, next) => {
  req.params.id = req.user.id;

  return next();
};

exports.updateMe = catchAsync(async (req, resp, next) => {
  const { id } = req.user;

  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError('This route can not be used to update password', 400));
  }

  const filteredBody = filterObj(req.body, 'email', 'username', 'address');

  if (req.file && req.file.filename) filteredBody.photo = req.file.filename;

  const updatedUser = await User.findByIdAndUpdate(id, filteredBody, { new: true, runValidators: true });

  return resp.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, resp, next) => {
  const { id } = req.user;

  await User.findByIdAndUpdate(id, { active: false });

  return resp.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.getWishList = catchAsync(async (req, resp, next) => {
  const { id } = req.user;

  const user = await (await User.findById(id)).populate('wishList');

  return resp.status(200).json({ status : 'sucess', data: user.wishList });
});

exports.addItemToWishList = catchAsync(async (req, resp, next) => {
  const { id } = req.user;

  const user = await User.findById(id);

  user.wishList = [...user.wishList, req.body.item];

  const newUserWithUpdatedWishList = await user.save({ validateBeforeSave: false });

  return resp.status(201).json({
    status : 'sucess',
    data:  newUserWithUpdatedWishList.wishList
  })
});

exports.deleteItemFromWishList = catchAsync(async (req, resp, next) => {
  const { id } = req.user;
  console.log(req.body.item);

  if(!req.body.item)
    return next(new AppError('Provide an item', '400'));
  const user = await User.findById(id);
  
  if(!user)
    return next(new AppError('User not found', '404'));

  const newWishlist = user.wishList.filter((item) => {
    
    console.log(item !== req.body.item, item, req.body.item);

    return item !== req.body.item;
  
  });
  console.log(newWishlist);


  const newUserWithUpdatedWishList = await user.save({ validateBeforeSave: false, j: true });

  return resp.status(200).json({
    status : 'sucess',
    data:  newUserWithUpdatedWishList.wishList
  })
});

exports.getUser = handlerFactory.getOne(User);
