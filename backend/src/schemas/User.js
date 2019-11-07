const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  user: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: false,
  },
  provider: {
    type: Boolean,
    required: false,
  },
  status: {
    type: Boolean,
    required: false,
    default: false,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);
