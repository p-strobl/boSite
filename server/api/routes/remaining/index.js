const router = require('express').Router();
const controller = require('../../controller');

router.get('/', controller.remaining.GET);

module.exports = router;