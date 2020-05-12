const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   match: [/.+@.+\..+/, 'Must use a valid email address'],
    // },
    password: {
      type: String,
      required: true,
    },
    poems: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Poem',
      },
    ],
    collections: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Collection',
      },
    ],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// get a count of how many collections a user has created
userSchema.virtual('collectionCount').get(function () {
  return this.collections.length;
});

// get a count of how many poems a user has created
userSchema.virtual('poemCount').get(function () {
  return this.poems.length;
});

const User = model('User', userSchema);

module.exports = User;
