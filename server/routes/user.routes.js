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
  addItemToWishList,
  deleteItemFromWishList
} = require('../controllers/user.controller');

const { protect } = require('../controllers/auth.controller');

router.route('/updateMe').patch(protect, uploadUserPhoto, resizeUserPhoto, updateMe);
router.route('/deleteMe').delete(protect, deleteMe);
router.route('/getMe').get(protect, getMe, getUser);

router.route('/wishlist').get(protect, getWishList).post(protect, addItemToWishList)
router.route('/wishList/delete').post(protect, deleteItemFromWishList);

router.use('/:userToken/books', protect, bookRoutes);

module.exports = router;
