const { response } = require('../lib/response');
const Department = require('../models/department-model');

/**
 * Get all departments
 * @param req {object}
 * @param res {object}
 * @param next {Function}
 */
exports.find = function getAllDepartments(req, res, next) {
  const data = {};
  Department.find()
    .then((records) => {
      data.records = records;
      res.status(200).json(response(data));
      next();
    })
    .catch((err) => {
      res.status(500).json({ error: err });
      next();
    });
};
