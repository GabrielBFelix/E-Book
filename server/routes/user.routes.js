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
} = require('../controllers/user.controller');

const { protect } = require('../controllers/auth.controller');

router.route('/updateMe').post(protect, uploadUserPhoto, resizeUserPhoto, updateMe);
router.route('/deleteMe').post(protect, deleteMe);
router.route('/getMe').get(protect, getMe, getUser);

router.use('/:userId/books', protect, bookRoutes);

module.exports = router;
