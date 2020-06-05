const router = require("express").Router();

const recipesRoute = require("./recipes");
const landingRoute = require("./landing");
const remainingRoutes = require("./remaining");

router.use("/recipes", recipesRoute);
router.use("/", landingRoute);
router.use("*", remainingRoutes);

module.exports = router;
