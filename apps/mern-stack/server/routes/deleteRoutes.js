const express = require('express');
const UserModel = require('../models/Users');
const router = express.Router();

// If Visiting Route with DELETE Command, Run Function
router.delete('/deleteUsers', async (req, res) => {
  // Mongoose finds matching document, deletes it and resolves
  var data = await UserModel.deleteOne({ name: 'John' });
  res.json(data);
});

module.exports = router;