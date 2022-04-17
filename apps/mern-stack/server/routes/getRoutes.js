const express = require('express');
const UserModel = require('../models/Users');
const router = express.Router();

router.get('/getUsers', async (req, res) => {
  var data = await UserModel.find({});
  res.json(data);
});

module.exports = router;