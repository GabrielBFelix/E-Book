const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: {
      message: 'Please provide a validate email',
      validator: validator.default.isEmail,
    },
  },

  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
    validate: [validator.default.isAlphanumeric, 'A password must only contain letters and numbers'],
    select: false
  },

  passwordConfirm: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
    validate: {
      message: 'Password and confirm password did not match',
      validator: function (el) {
        return el === this.password;
      },
    },
  },

  username: {
    type: String,
    required: true,
  },

  address: [
    {
      street: { type: String, required: [true, 'Please provide your street name'] },
      number: { type: String, required: [true, 'Please provide the number of your house'] },
      neighborhood: { type: String, required: [true, 'Please provide a neighborhood'] },
      country: { type: String, required: [true, 'Please provide your country'] },
      state: { type: String, required: [true, 'Please provide your state name'] },
    },
  ],

  active: {
    type: Boolean,
    default: true,
  },

  roles: {
    type: String,
    enum: ['user', 'seller', 'admin'],
    default: 'user',
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;

  return next();
});

userSchema.methods.comparePasswords = async function (candidatePassword , password) {
  console.log(candidatePassword, password)
  return await bcrypt.compare(candidatePassword, password);
};

const User = mongoose.model('Users', userSchema);

module.exports = User;
