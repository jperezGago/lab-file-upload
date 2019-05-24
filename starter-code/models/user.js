const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  username: String,
  email: String,
  password: String,
  // File
  imgName: String,
  imgPath: String

});

const User = mongoose.model('User', UserSchema);

module.exports = User;
