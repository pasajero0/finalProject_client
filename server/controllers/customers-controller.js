const mongoose = require('mongoose');
const uniqid = require('uniqid');
const { response } = require('../lib/response');
const { mongooseErrorToResponse } = require('../lib/mongoose-error-to-response');
const Customer = require('../models/customer-model');
const { mail } = require('../services/mail');

/**
 * Add new customer to database
 * @param req {object}
 * @param res {object}
 * @param next {Function}
 */
exports.add = function addNewCustomer(req, res, next) {
  if (!req.body.email || !req.body.password) {
    res.status(200).json(response({}, 'Invalid incoming data', 1));
    next();
  } else {
    (new Customer({
      _id: new mongoose.Types.ObjectId(),
      password: req.body.password,
      email: req.body.email
    })).save()
      .then((result) => {
        res.status(200).json(response(result.toJSON()));
        next();
      })
      .catch((err) => {
        res.status(200).json(mongooseErrorToResponse(err));
        next();
      });
  }
};
/**
 * Get customer by id
 * @param req {object}
 * @param res {object}
 * @param next {Function}
 */
exports.findById = function getCustomerById(req, res, next) {
  Customer.find({ _id: new mongoose.Types.ObjectId(req.params.id) })
    .then((result) => {
      if (result.length > 0) {
        res.status(200).json(response(result[0]));
      } else {
        res.status(404).json(response({}, 'No valid entry found', 1));
      }
      next();
    })
    .catch((err) => {
      res.status(500).json({ error: err });
      next();
    });
};
/**
 * Get all customers
 * @param req {object}
 * @param res {object}
 * @param next {Function}
 */
exports.find = function getAllCustomers(req, res, next) {
  Customer.find()
    .then((result) => {
      res.status(200).json(response(result));
      next();
    })
    .catch((err) => {
      res.status(500).json({ error: err });
      next();
    });
};

function collectData(src, keys) {
  const result = {};
  keys.forEach((key) => {
    if (typeof(src[key]) !== 'undefined') {
      result[key] = src[key];
    }
  });
  return result;
}

/**
 * Update profile
 * @param req {object}
 * @param res {object}
 * @param next {Function}
 */
exports.updateProfile = function updateCustomerData(req, res, next) {
  const data = collectData(
    req.body,
    ['first_name', 'last_name', 'city', 'zip', 'address', 'phone']
  );
  Customer.updateOne({ _id: req.user.id }, { $set: data })
    .then((result) => {
      if (result) {
        res.status(200).json(response(data));
      } else {
        res.status(404).json(response({}, 'No valid entry found', 1));
      }
      next();
    })
    .catch((err) => {
      res.status(500).json({ error: err });
      next();
    });

};
/**
 * Update customer data
 * @param req {object}
 * @param res {object}
 * @param next {Function}
 */
exports.update = function updateCustomerData(req, res, next) {
  Customer.updateOne({ _id: req.body.id },
    {
      $set: {
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name
      }
    })
    .then((result) => {
      if (result) {
        res.status(200).json(response(result));
      } else {
        res.status(404).json(response({}, 'No valid entry found', 1));
      }
      next();
    })
    .catch((err) => {
      res.status(500).json({ error: err });
      next();
    });
};
/**
 * Show profile information of stored in session user
 * @param req
 * @param res
 * @param next
 */
exports.profile = function customerProfile(req, res, next) {
  res.status(200).json(response(req.user));
  next();
};
