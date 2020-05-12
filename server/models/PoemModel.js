const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema;

const poemSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: 'You must provide a title',
    },
    theme: {
      type: String,
    },
    poem: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
      get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Poem = mongoose.model('Poem', poemSchema);

module.exports = Poem;
