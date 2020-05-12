const { Poem, Collection, User } = require('../models');

module.exports = {
  // get all poems
  async getPoems(req, res) {
    try {
      const allPoems = await Poem.find();
      res.json(allPoems);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // get poem by id
  async getPoemById({ params }, res) {
    try {
      const singlePoem = await Poem.findOne({ _id: params.poemId });

      if (!singlePoem) {
        throw new Error({ message: 'Poem not found!' });
      }

      res.json(singlePoem);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // create a new poem
  async createPoem({ user, body }, res) {
    try {
      const newPoem = await Poem.create(body);
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        {
          $push: { poems: newPoem._id },
        },
        {
          new: true,
        }
      );

      if (!updatedUser) {
        throw new Error({ message: 'User not found!' });
      }

      res.json(newPoem);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  // delete poem
  async deletePoem({ user, params }, res) {
    try {
      const deletedPoem = await Poem.findOneAndDelete({ _id: params.poemId });

      if (!deletedPoem) {
        throw new Error({ message: 'Poem not found!' });
      }

      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { poems: params.poemId } },
        { new: true }
      );

      if (!updatedUser) {
        throw new Error({ message: 'User not found!' });
      }

      // if poem belonged to a collection, remove it
      await Collection.findOneAndUpdate({ poems: params.poemId }, { $pull: { 'poems.$': params.poemId } });

      res.json({ message: 'Poem deleted!' });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  // update a poem
  async updatePoem({ params, body }, res) {
    try {
      const updatedPoem = await Poem.findOneAndUpdate({ _id: params.poemId }, body, { new: true, runValidators: true });

      if (!updatedPoem) {
        throw new Error({ message: 'Poem not found!' });
      }
      res.json(updatedPoem);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
};
