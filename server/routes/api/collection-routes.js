const router = require('express').Router();
const {
  getCollections,
  getCollectionById,
  createCollection,
  deleteCollection,
  addPoem,
  removePoem,
} = require('../../controllers/collection-controller');

const { authMiddleware } = require('../../utils/auth');

// /api/collections
router.route('/').get(getCollections).post(authMiddleware, createCollection);

// /api/collections/:collectionId
router.route('/:collectionId').get(authMiddleware, getCollectionById).delete(authMiddleware, deleteCollection);

// /api/collections/:collectionId/add/:poemId
router.route('/:collectionId/add/:poemId').put(authMiddleware, addPoem);

// /api/collections/:collectionId/remove/:poemId
router.route('/:collectionId/remove/:poemId').put(authMiddleware, removePoem);

module.exports = router;
