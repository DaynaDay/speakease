const router = require('express').Router();
const userRoutes = require('./user-routes');
const poemRoutes = require('./poem-routes');
const collectionRoutes = require('./collection-routes');

router.use('/users', userRoutes);
router.use('/poems', poemRoutes);
router.use('/collections', collectionRoutes);

module.exports = router;