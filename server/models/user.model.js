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
    select: false,
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

  wishList : [
    {
      type : mongoose.Types.ObjectId,
      ref : 'Book',
    }
  ],

  address: [
    {
      street: { type: String,  },
      number: { type: String, },
      neighborhood: { type: String},
      country: { type: String},
      state: { type: String  }
    },
  ],

  active: {
    type: Boolean,
    default: true,
    select : false
  },

  roles: {
    type: String,
    enum: ['user', 'seller', 'admin'],
    default: 'user',
  },

  photo : String
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;

  return next();
});

userSchema.methods.comparePasswords = async function (candidatePassword, password) {
  console.log(candidatePassword, password);
  return await bcrypt.compare(candidatePassword, password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
