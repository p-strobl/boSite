const router = require('express').Router();

const landingRoute = require('./landing');
const recipesRoute = require('./recipes');
const remainingRoutes = require('./remaining');

router.use('/', landingRoute);
router.use('/recipes', recipesRoute);
router.use('*', remainingRoutes);

module.exports = router;
