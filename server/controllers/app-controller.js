const { response } = require('../lib/response');
const Department = require('../models/department-model');




/**
 * Store cart data
 * @param req {object}
 * @param res {object}
 * @param next {Function}
 */
exports.storeCart = (req, res, next) => {
  req.session.cart = req.body;
  res.status(200).json(response(req.body));
  return next();
};
/**
 * Get initial data for the client application
 * @param req {object}
 * @param res {object}
 * @param next {Function}
 */
exports.getInitialData = function getInitialData(req, res, next) {
  Department.find()
    .then((records) => {
      res.status(200).json(response({
        cart: req.session.cart || {
          products: [],
          total: 0,
          count: 0
        },
        departments: records,
        customer: req.user
      }));
      next();
    })
    .catch((err) => {
      res.status(500).json({ error: err });
      next();
    });
};


