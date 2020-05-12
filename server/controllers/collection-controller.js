const { Poem, Collection, User } = require('../models');

module.exports = {
  // get all collection
  async getCollections(req, res) {
    try {
      const allCollections = await Collection.find().populate('poems');
      res.json(allCollections);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // get collection by id
  async getCollectionById({ params }, res) {
    try {
      const singleCollection = await Collection.findOne({ _id: params.collection }).populate('poems');

      if (!singleCollection) {
        throw new Error({ message: 'Collection not found!' });
      }

      res.json(singleCollection);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // create a new collection
  async createCollection({ user, body }, res) {
    try {
      const newCollection = await Collection.create(body);
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        {
          $push: { collections: newCollection._id },
        },
        {
          new: true,
        }
      );

      if (!updatedUser) {
        throw new Error({ message: 'User not found!' });
      }

      res.json(newCollection);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  // delete collection
  async deleteCollection({ user, params }, res) {
    try {
      const deletedCollection = await Collection.findOneAndDelete({ _id: params.collectionId });

      if (!deletedCollection) {
        throw new Error({ message: 'Collection not found!' });
      }

      // remove collection id from user's list
      await User.findOneAndUpdate({ _id: user._id }, { $pull: { collections: params.collectionId } });

      res.json({ message: 'Collection deleted!' });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  // add a poem to the collection
  async addPoem({ params }, res) {
    try {
      const updatedCollection = await Collection.findOneAndUpdate(
        { _id: params.collectionId },
        { $push: { poems: params.poemId } },
        {
          new: true,
          runValidators: true,
        }
      );

      if (!updatedCollection) {
        throw new Error({ message: 'Collection not found!' });
      }
      res.json(updatedCollection);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  // remove a poem from a collection
  async removePoem({ params }, res) {
    try {
      const updatedCollection = await Collection.findOneAndUpdate(
        { _id: params.collectionId },
        { $pull: { poems: params.poemId } },
        {
          new: true,
          runValidators: true,
        }
      );

      if (!updatedCollection) {
        throw new Error({ message: 'Collection not found!' });
      }
      res.json(updatedCollection);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
};
