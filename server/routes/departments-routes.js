const router = require('express').Router();

const departmentController = require('../controllers/departments-controller');

router.get('/', departmentController.find);

router.use('/', (req, res, next) => {});

module.exports = router;
