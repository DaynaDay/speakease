const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://DaySpeak:KnightlyNews93@ds111478.mlab.com:11478/heroku_93f1qc1q', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

module.exports = mongoose.connection;
