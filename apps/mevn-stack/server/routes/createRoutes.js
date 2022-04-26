const express = require('express');
const UserModel = require('../models/Users');
const router = express.Router();

router.post('/createUser', async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);

});

module.exports = router;