const { response } = require('../lib/response');
const Product = require('../models/product-model');
const Department = require('../models/department-model');
const ProductVariant = require('../models/product-variant-model');

exports.searchHints = (req, res, next) => {
  const data = {
    query: req.body.query,
    records: []
  };
  if (!req.body.query || req.body.query.length < 3) {
    res.status(200).json(response(data));
    return next();
  }
  const where = { name: { $regex: new RegExp(data.query, 'gi') } };


  Promise.resolve()
    .then(() => {
      // if department is requested add to filter
      if (req.body.department) {
        return Department.findOne({ slug: req.body.department });
      }
      return Promise.resolve({});
    })
    .then((dep) => {
      const filter = dep && dep._id ? { ...where, departmentIds: dep._id } : where;
      return Product.find(filter, { name: 1 });
    })
    .then((records) => {
      data.records = records.map((p)=> p.name);
      data.records.sort();
      const key = data.query.toLowerCase();
      data.records.sort((a, b)=>{
        const toNum = v => v.substr(0, key.length).toLowerCase() === key ? 1 : 0;
        return toNum(b) - toNum(a);
      });
      res.status(200).json(response(data));
      next();
    })
    .catch((err) => {
      res.status(500).json({ error: err });
      next();
    });
}


/**
 * Get all products
 * @param req {object}
 * @param res {object}
 * @param next {Function}
 */
exports.find = function getAllProducts(req, res, next) {
  const data = {
    perPage: parseInt(req.query.perPage, 10) || 10,
    page: parseInt(req.query.page, 10) || 1,
    records: [],
    count: 0,
    pagesTotal: 0,
    q: req.query.q || '',
    filters: req.query.filters || {}
  };
  if(data.q !== ''){
    data.filters.product = { name: { $regex: new RegExp(data.q, 'gi') }};
  }
  Promise.resolve()
    .then(() => {
      // if department is requested add to filter
      if (req.query.department) {
        return Department.findOne({ slug: req.query.department });
      }
      return Promise.resolve({});
    })
    .then((dep) => {
      if (dep && dep._id) {
        data.filters.product = { ...data.filters.product, departmentIds: dep._id };
      }
      return Product.find(data.filters.product || {}).skip(data.perPage * ( data.page - 1 )).limit(data.perPage);
    })
    .then((records) => {
      data.records = records;
      return Product.find(data.filters.product).countDocuments();
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

exports.findOnSale = (req, res, next) => {
  const filters = req.query.filters || {};
  filters.product = filters.product || {};
  exports.find({
    ...req,
    query: {
      ...req.query,
      filters: {
        ...filters,
        product: {
          ...filters.product,
          isAvailable: true,
          isBrandNew: false,
          isOnSale: true
        }
      }
    }
  }, res, next);
};

exports.findNew = (req, res, next) => {
  const filters = req.query.filters || {};
  filters.product = filters.product || {};
  exports.find({
    ...req,
    query: {
      ...req.query,
      filters: {
        ...filters,
        product: {
          ...filters.product,
          isAvailable: true,
          isBrandNew: true,
          isOnSale: false
        }
      }
    }
  }, res, next);
};


/**
 * Get all products
 * @param req {object}
 * @param res {object}
 * @param next {Function}
 */
exports.findBySlug = function getProductBySlug(req, res, next) {
  Product.find({ slug: req.params.slug })
    .then((result) => {
      if (result.length > 0) {
        ProductVariant.find({ productId: result[0]._id})
          .then((found)=>{
            const data = {...result[0].toObject()};
            data.variants = found;
            res.status(200).json(response(data));
            next();
          });
      } else {
        res.status(404).json(response({}, 'No valid entry found', 1));
        next();
      }

    })
    .catch((err) => {
      res.status(500).json({ error: err });
      next();
    });
};
