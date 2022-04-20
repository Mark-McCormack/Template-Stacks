const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// Allow Parsing of JSON & CORS Activity
app.use(express.json());
app.use(cors());

// Connect to MongoDB Database from URL
mongoose.connect(
  'REPLACE_WITH_YOUR_MONGODB_URL',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log('MongoDB has connected successfully.');
    else console.log(err);
  }
);

// Link Routes to the files with their functions
app.use('/create', require('./routes/createRoutes'));
app.use('/get', require('./routes/getRoutes'));
app.use('/update', require('./routes/updateRoutes'));
app.use('/delete', require('./routes/deleteRoutes'));

// Listen for Queries from port 3000
app.listen(3000, () => {
  console.log('Server Running...');
});
