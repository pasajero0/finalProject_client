require('dotenv').config();
const slugify = require('slugify');
const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');
const url = process.env.NODE_ENV === 'test' ? process.env.DB_MONGO_URL_TEST : process.env.DB_MONGO_URL;

let database = null;

const toSlug = (str) => {
  return slugify(str.replace(/[^\w\d]+/gi, '-').replace(/[-]+/gi, '-').toLowerCase(), '-');
};

// Connect to the db
MongoClient.connect(url, { useNewUrlParser: true })
  .then((connect) => {
    return connect.db('shop');
  })
  .then((db) => {
    database = db;
    return Promise.all([
      database.collection('products').deleteMany({}),
      database.collection('productVariants').deleteMany({}),
      database.collection('departments').deleteMany({})
    ]);
  })
  .then(() => {
    const collection = database.collection('counters');
    return collection.find({ subject: { $in: ['product', 'productVariant', 'department'] } }).toArray();
  })
  .then((res) => {
    const counters = {};
    res.forEach(v => {
      counters[v.subject] = v.count;
    });
    const src = JSON.parse(fs.readFileSync(path.resolve(__dirname, './products.json'), 'utf8'));
    const products = [];
    const variants = [];
    const departments = {};

    const getDepartmentId = (key, name, slug, parent = '') => {
      if (!Object.keys(departments).includes(key)) {
        counters.department += 1;
        departments[key] = {
          name,
          _id: counters.department.toString(),
          slug,
          parent: parent ? departments[parent]._id : 0,
          position: 0,
          filters: {}
        };
      }
      return departments[key]._id;
    };

    const addDepartmentFilter = (key, name, value) => {
      const department = departments[key];
      if (!Object.keys(department.filters).includes(name)) {
        department.filters[name] = [];
      }
      if (!department.filters[name].includes(value)) {
        department.filters[name].push(value);
      }
    };


    src.forEach(p => {
      counters.product += 1;
      const newProduct = { ...p, _id: counters.product.toString(), slug: toSlug(`${p.name}-${counters.product}`) };

      newProduct.departmentIds = [
        getDepartmentId(p.gender, p.gender, toSlug(p.gender)),
        getDepartmentId(`${p.gender}${p.category}`, `${p.category}`, toSlug(`${p.gender} ${p.category}`), p.gender)
      ];
      newProduct.added = new Date().getTime();
      addDepartmentFilter(`${p.gender}${p.category}`, 'country', p.country);
      addDepartmentFilter(`${p.gender}${p.category}`, 'brand', p.brand);

      if (!newProduct.isBrandNew) {
        newProduct.isBrandNew = Math.random() >= 0.5;
      }
      if (!newProduct.isAvailable) {
        newProduct.isAvailable = Math.random() >= 0.5;
      }
      if (!newProduct.isOnSale) {
        newProduct.isOnSale = Math.random() >= 0.5;
      }
      if (!newProduct.rate) {
        newProduct.rate = Math.floor(Math.random() * Math.floor(5));
      }
      if (!newProduct.prices) {
        const price = 20 + Math.floor(Math.random() * Math.floor(500));
        newProduct.prices = {
          retail: price,
          sale: Math.floor(price * Math.random())
        };
      }

      delete newProduct.category;
      delete newProduct.gender;
      delete newProduct.variants;

      products.push(newProduct);

      if (p.variants && p.variants.length > 0) {
        p.variants.forEach((v) => {
          counters.productVariant += 1;
          variants.push({
            ...v,
            inStock: Math.floor(Math.random() * Math.floor(100)),
            _id: counters.productVariant.toString(),
            productId: counters.product.toString()
          });

          Object.keys(v).forEach((filter) => {
            if (filter !== 'inStock') {
              addDepartmentFilter(`${p.gender}${p.category}`, filter, v[filter]);
            }
          });
        });
      }

    });

    const promises = res.map((v) => {
      return database.collection('counters').updateOne(
        { _id: v._id },
        { $set: { ...v, count: counters[v.subject] } },
        { upsert: true }
      );
    });

    promises.push(database.collection('departments').insertMany(Object.values(departments)));
    promises.push(database.collection('productVariants').insertMany(variants));
    promises.push(database.collection('products').insertMany(products));

    return Promise.all(promises);

  })
  .then((res) => {
    console.log(`Succeed. Seeded ${res[3].insertedCount} records`);
    process.exit();
  }).catch(console.log);
