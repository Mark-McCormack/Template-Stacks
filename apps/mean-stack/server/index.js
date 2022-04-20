const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect(
  '',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log('MongoDB has connected successfully.');
    else console.log(err);
  }
);

app.use('/create', require('./routes/createRoutes'));
app.use('/get', require('./routes/getRoutes'));
app.use('/update', require('./routes/updateRoutes'));
app.use('/delete', require('./routes/deleteRoutes'));

app.listen(3000, () => {
  console.log('Server Running...');
});
