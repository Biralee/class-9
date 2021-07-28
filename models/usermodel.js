const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstname:  String, // String is shorthand for {type: String}
  lastname: String,
  email:   String,
  password:String
});
const user = mongoose.model('user', userSchema);
module.exports = user;