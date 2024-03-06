const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/';

mongoose.connect(dbURI)
  .then((result) => console.log('Connected to DB'))
  .catch((err) => console.log(err));

