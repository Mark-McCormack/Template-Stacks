const express = require('express');
const UserModel = require('../models/Users');
const router = express.Router();

// If Visiting Route with PUT Command, Run Function
router.put('/updateUsers', async (req, res) => {
  // Mongoose finds matching document & updates a given detail
  var data = await UserModel.updateOne({ name: 'John' }, { $set: { age: 25 } });
  res.json(data);
});

module.exports = router;