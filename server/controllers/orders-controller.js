const mongoose = require('mongoose');
const { response } = require('../lib/response');
const { mongooseErrorToResponse } = require('../lib/mongoose-error-to-response');
const Order = require('../models/order-model');
const Product = require('../models/product-model');
const { mail } = require('../services/mail');

/**
 * Get all orders
 * @param req {object}
 * @param res {object}
 * @param next {Function}
 */
exports.history = function getAllOrders(req, res, next) {
  const data = {
    perPage: parseInt(req.query.perPage, 10) || 10,
    page: parseInt(req.query.page, 10) || 1,
    records: [],
    count: 0,
    pagesTotal: 0,
    filters: {}
  };


  if (!req.user) {
    res.status(400).json(response({}, 'Not found', 1));
    return next();
  }
  const {email} = req.user;

  Order.find({ email }).skip(data.perPage * ( data.page - 1 )).limit(data.perPage)
    .then((records) => {
      data.records = records;
      return Order.find({ email }).countDocuments();
    })
    .then((count) => {
      data.count = count;
      data.pagesTotal = Math.ceil(count / data.perPage);
      res.status(200).json(response(data));
      next();
    })
    .catch((err) => {
      res.status(500).json({ error: err });
      next();
    });
};


/**
 * Add new order to database
 * @param req {object}
 * @param res {object}
 * @param next {Function}
 */
exports.add = function addNewOrder(req, res, next) {
  // check product prices
  if (!req.body.products || req.body.products.length === 0) {
    res.status(200).json(response({}, 'Empty products list', 1));
    return next();
  }
  const productIds = req.body.products.map(p => p.slug);
  Product.find({ slug: { $in: productIds } })
    .then((productsFound) => {
      if (productsFound.length > 0) {
        const result = {};
        productsFound.forEach((p) => {
          result[p.slug] = p.isOnSale ? p.prices.sale : p.prices.retail;
        });
        const info = { total: 0, quantity: 0 };
        req.body.products.forEach((p) => {
          if (p.price < result[p.slug]) {
            res.status(200).json(response({}, `Product ${p.name} price is not actual`, 1));
            return next();
          }
          info.quantity += parseInt(p.quantity);
          info.total += parseInt(p.quantity) * parseInt(p.price);
        });
        if (parseInt(req.body.total) !== info.total || parseInt(req.body.count) !== info.quantity) {
          res.status(200).json(response({}, 'Invalid order total or quantity', 1));
          return next();
        }
        const order = new Order({
          ...req.body,
          _id: new mongoose.Types.ObjectId(),
          stages: { new: new Date().getTime(), payed: new Date().getTime() }
        });
        return order.save();
      }
      res.status(404).json(response({}, 'No products found', 1));
      return next();
    })
    .then((result) => {
      mail(
        process.env.MAIL_FROM,
        req.body.email,
        'Your order has been placed',
        `Your order number is ${result.number}`,
        `<p>Your order number is ${result.number}</p>`
      );
      res.status(200).json(response(result, 'The order has been placed', 0));
      return next();
    })
    .catch((err) => {
      res.status(200).json(mongooseErrorToResponse(err));
      return next();
    });
};
