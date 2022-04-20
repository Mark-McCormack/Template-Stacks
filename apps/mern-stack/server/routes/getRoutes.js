const express = require('express');
const UserModel = require('../models/Users');
const router = express.Router();

// If Visiting Route with GET Command, Run Function
router.get('/getUsers', async (req, res) => {
  // Mongoose finds matching document and resolves it to user
  var data = await UserModel.find({});
  res.json(data);
});

module.exports = router;