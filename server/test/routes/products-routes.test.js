if (process.env.NODE_ENV !== 'test') {
  console.log('run this script in NODE_ENV test mode only!');
  console.log('try to run test:win for windows or test:lin for Linux!');
  process.exit();
}
const mongoose = require('mongoose');
const request = require('supertest');
const chai = require('chai');
const app = require('../../server');

mongoose.set('useCreateIndex', true);

const { expect } = chai;

describe('API Integration Tests', () => {

  describe('GET /products', () => {

    it('should succeed on products request', (done) => {
      request(app)
        .get('/products')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.all.keys(['data', 'message', 'success']);
          expect(res.body.data).to.have.all.keys(['records', 'count', 'page', 'perPage', 'pagesTotal', 'filters']);
          expect(res.body.data.count).to.be.a('number');
          expect(res.body.data.page).to.be.a('number');
          expect(res.body.data.perPage).to.be.a('number');
          expect(res.body.data.pagesTotal).to.be.a('number');
          expect(res.body.data.records).to.be.an('array');
          done();
        });
    });
  });

  describe('GET /products/:slug', () => {

    it('should succeed on product request', (done) => {
      request(app)
        .get('/products')
        .end((err, res) => {
          expect(res.body.data.records).to.be.an('array');
          const product = res.body.data.records[0];
          request(app)
            .get(`/products/${product.slug}`)
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              expect(res.body).to.be.an('object');
              expect(res.body).to.have.all.keys(['data', 'message', 'success']);
              done();
            });
        });
    });
  });
});

