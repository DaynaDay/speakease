const router = require('express').Router();
const { getPoems, getPoemById, createPoem, updatePoem, deletePoem } = require('../../controllers/poem-controller');

const { authMiddleware } = require('../../utils/auth');

// /api/poems
router.route('/').get(getPoems).post(authMiddleware, createPoem);

// /api/poems/:poemId
router.route('/:poemId').get(getPoemById).put(authMiddleware, updatePoem).delete(authMiddleware, deletePoem);

module.exports = router;
