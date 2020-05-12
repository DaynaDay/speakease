const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema(
  {
    collectionName: {
      type: String,
      required: true,
      trim: true,
    },
    poems: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Poem',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

collectionSchema.virtual('poemCount').get(function () {
  return this.poems.length;
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;
