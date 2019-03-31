const router = require('express').Router();

const productController = require('../controllers/products-controller');

router.get('/', productController.find);

router.get('/sale', productController.findOnSale);

router.get('/new', productController.findNew);

router.get('/:slug', productController.findBySlug);

router.post('/search-hints', productController.searchHints);

router.use('/', (req, res, next) => {});

module.exports = router;
