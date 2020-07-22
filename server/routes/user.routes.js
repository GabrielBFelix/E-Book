const express = require('express');

const bookRoutes = require('./book.routes');

const router = express.Router();

const {
  updateMe,
  deleteMe,
  getMe,
  getUser,
  uploadUserPhoto,
  resizeUserPhoto,
  getWishList,
  addItemToWishList
} = require('../controllers/user.controller');

const { protect } = require('../controllers/auth.controller');

router.route('/updateMe').patch(protect, uploadUserPhoto, resizeUserPhoto, updateMe);
router.route('/deleteMe').delete(protect, deleteMe);
router.route('/getMe').get(protect, getMe, getUser);

router.route('/wishlist').get(protect, getWishList).post(protect, addItemToWishList);

router.use('/:userId/books', protect, bookRoutes);

module.exports = router;
