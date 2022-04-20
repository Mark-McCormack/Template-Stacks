const express = require('express');
const UserModel = require('../models/Users');
const router = express.Router();

// If Visiting Route with POST Command, Run Function
router.post('/createUser', async (req, res) => {
  // Get information from the request & create object
  const user = req.body;
  const newUser = new UserModel(user);

  // Save the info to the database & resolve for user
  await newUser.save();
  res.json(user);
});

module.exports = router;