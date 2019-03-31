const router = require('express').Router();

const appController = require('../controllers/app-controller');

router.get('/initial-data', appController.getInitialData);

router.post('/store-cart', appController.storeCart);

router.use('/', (req, res, next) => {});

module.exports = router;
