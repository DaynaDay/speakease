const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const poemModelSchema = new Schema({

title: {
    type: String,
    trim: true,
    required: "Theme of"
  },
  category: {
    type: String
    
  },
  poem: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

model.exports = poemModelSchema