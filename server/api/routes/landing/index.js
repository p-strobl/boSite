const router = require('express').Router();
const controller = require('../../controller');

router.get('/', controller.landing.GET);

module.exports = router;