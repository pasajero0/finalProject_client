if (process.env.NODE_ENV !== 'test') {
  console.log('run this script in NODE_ENV test mode only!');
  console.log('try to run test:win for windows or test:lin for Linux!');
  process.exit();
}
const mongoose = require('mongoose');
const request = require('supertest');
const chai = require('chai');
const app = require('../../server');
const Product = require('../../models/product-model');

mongoose.set('useCreateIndex', true);

const { expect } = chai;


describe('API Integration Tests', () => {
  const products = [];
  const info = { total: 0, count: 0 };
  const fields = {
    email: 'email@example.com',
    first_name: 'Bill',
    last_name: 'Clinton',
    city: 'Washington',
    zip: '00234',
    address: 'Washington St. 32',
    phone: '122345678',
    card_number: '1234567898762345'
  };


  before((done) => {
    Product.find({}).limit(5)
      .then((result) => {
        result.forEach(p => {
          const { slug, prices, isOnSale, name } = p;
          products.push({
            slug,
            name,
            price: isOnSale ? prices.sale : prices.retail,
            quantity: Math.round(Math.random() * 5)
          });
        });
        products.forEach(p => {
          info.total += p.price * p.quantity;
          info.count += p.quantity;
        });
        done();
      })
      .catch(() => {} );
  });

  describe('POST /orders/add', () => {



    const checkMissing = (name) =>{
      it(`should failed on missing ${name}`, (done) => {
        const { ...otherFields } = fields;
        const data = { ...otherFields, ...info, products  };
        delete data[name];
        request(app)
          .post('/orders/add')
          .send(data)
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.all.keys(['data', 'message', 'success']);
            expect(res.body.success).to.be.a('boolean').to.be.false;
            expect(res.body.message).to.be.a('string').that.is.not.empty;
            done();
          });
      });
    };
    [...Object.keys(fields), 'products', 'total', 'count'].forEach( k => checkMissing(k));


    it(`should failed on wrong total`, (done) => {
      const { ...otherFields } = fields;
      const data = { ...otherFields, ...info, products  };
      data.total -= 1;
      request(app)
        .post('/orders/add')
        .send(data)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.all.keys(['data', 'message', 'success']);
          expect(res.body.success).to.be.a('boolean').to.be.false;
          expect(res.body.message).to.be.a('string').that.is.not.empty;
          done();
        });
    });

    it(`should failed on wrong count`, (done) => {
      const { ...otherFields } = fields;
      const data = { ...otherFields, ...info, products  };
      data.count -= 1;
      request(app)
        .post('/orders/add')
        .send(data)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.all.keys(['data', 'message', 'success']);
          expect(res.body.success).to.be.a('boolean').to.be.false;
          expect(res.body.message).to.be.a('string').that.is.not.empty;
          done();
        });
    });

    it(`should succeed on valid data`, (done) => {
      const { ...otherFields } = fields;
      const data = { ...otherFields, ...info, products  };
      request(app)
        .post('/orders/add')
        .send(data)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.all.keys(['data', 'message', 'success']);
          expect(res.body.success).to.be.a('boolean').to.be.true;
          expect(res.body.message).to.be.a('string').that.is.not.empty;
          done();
        });
    });
  });
});

