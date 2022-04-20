const mongoose = require('mongoose');

// Defines the structure of an object in our Database
const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

// Creates a Collection 'users' for our objects to be stored in
const UserModel = new mongoose.model('users', UsersSchema);

// Exports the Model Template for other files to use
module.exports = UserModel;