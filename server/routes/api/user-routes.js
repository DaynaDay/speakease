const router = require('express').Router();
const { createUser, login, getAllUsers, getSingleUser } = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/login
router.route('/login').post(login);

// /api/users/me to get logged in user's data
router.route('/me').get(authMiddleware, getSingleUser);

// /api/users/:username to get a user by their username
router.route('/:username').get(getSingleUser);

module.exports = router;
