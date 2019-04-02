const mongoose = require('mongoose');
const uniqid = require('uniqid');
const { response } = require('../lib/response');
const Customer = require('../models/customer-model');
const { sendOnRestorePasswordLetter } = require('../letters/postman');
/**
 * Send email to the customer with restore password link
 * @param req {object}
 * @param res {object}
 * @param next {Function}
 */
exports.sendRestorePasswordMail = function findUserByEmailAndSendResetPasswordMail(req, res, next) {
  const token = uniqid();
  const time = (new Date()).getTime() + (60 * 60 * 24 * 1000);

  Customer.updateOne({ email: req.body.email },
    {
      $set: {
        reset_password_token: token,
        reset_password_token_time: time
      }
    })
    .then((result) => {
      if (result.nModified > 0) {
        sendOnRestorePasswordLetter(
          req.body.email,
          `/restore-password/${token}`,
          (new Date(time)).toString()
        )
          .then(() => {
            res.status(200).json(response({}, 'Reset password link has been sent', 0));
            next();
          });
      } else {
        res.status(200).json(response({email: req.body.email}, 'Not registered user', 1));
        next();
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
      next();
    });
};


/**
 * Send email to the customer with restore password link
 * @param req {object}
 * @param res {object}
 * @param next {Function}
 */
exports.saveNewPassword = function findUserByEmailAndSaveNewPassword(req, res, next) {
  if (((!req.body.email || req.body.email !== req.user.email ) && !req.body.token ) || !req.body.password) {
    res.status(200).json(response({}, 'Required data is missing', 1));
    return next();
  }

  const where = req.body.token
    ? {
      reset_password_token: req.body.token,
      reset_password_token_time: { $gt: new Date().getTime() }
    }
    : { email: req.body.email };

  const error = req.body.token ? 'Invalid or outdated token' : 'User not found';

  Customer.find(where)
    .then((found) => {
      if (found.length === 0) {
        res.status(200).json(response({}, error, 1));
        return next();
      }
      const customer = new Customer(found[0]);
      customer.password = req.body.password;
      return customer.save()
        .then(() => {
          res.status(200).json(response({}, 'New password has been saved', 0));
          return next();
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
      next();
    });
};
