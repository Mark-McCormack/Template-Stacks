const express = require('express');
const UserModel = require('../models/Users');
const router = express.Router();

router.delete('/deleteUsers', async (req, res) => {
  var data = await UserModel.deleteOne({ name: 'John' });
  res.json(data);
});

module.exports = router;