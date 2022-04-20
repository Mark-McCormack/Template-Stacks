const express = require('express');
const UserModel = require('../models/Users');
const router = express.Router();

router.put('/updateUsers', async (req, res) => {
  var data = await UserModel.updateOne({ name: 'John' }, { $set: { age: 25 } });
  res.json(data);
});

module.exports = router;