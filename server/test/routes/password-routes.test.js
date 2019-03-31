if (process.env.NODE_ENV !== 'test') {
  console.log('run this script in NODE_ENV test mode only!');
  console.log('try to run test:win for windows or test:lin for Linux!');
  process.exit();
}
const mongoose = require('mongoose');
const request = require('supertest');
const chai = require('chai');
const app = require('../../server');
const Customer = require('../../models/customer-model');
const Counter = require('../../models/counter-model');

mongoose.set('useCreateIndex', true);

const { expect } = chai;
const newPassword = 'qwe567m,.ert';
const newCustomer = new Customer({
  _id: new mongoose.Types.ObjectId(),
  password: newPassword,
  first_name: 'john',
  last_name: 'smith',
  email: 'johnsmith@gmail.om'
});
const newCounter = new Counter({
  _id: new mongoose.Types.ObjectId(),
  subject: 'customer',
  count: 333
});

describe('API Integration Tests', () => {

  before((done) => {
    Customer.deleteMany({})
      .then(() => Counter.deleteMany())
      .then(() => newCounter.save())
      .then(() => newCustomer.save())
      .then(() => done())
      .catch(console.log);
  });

  describe('/POST password/send-token', () => {

    it('should send E-mail with restore link if user exists', (done) => {
      request(app)
        .post('/password/send-token')
        .send({ email: newCustomer.email })
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.all.keys(['data', 'message', 'success']);
          expect(res.body.success).to.be.a('boolean').to.be.true;
          expect(res.body.message).to.be.a('string').that.is.not.empty;
          done();
        });
    });

    it('should failed with sending E-mail with restore link if user not exists', (done) => {
      request(app)
        .post('/password/send-token')
        .send({ email: 'test@email.not' })
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.all.keys(['data', 'message', 'success']);
          expect(res.body.success).to.be.a('boolean').to.be.false;
          expect(res.body.message).to.be.a('string').that.is.not.empty;
          done();
        });
    });

  });
  describe('/POST password/save', () => {

    it('should failed saving if token is invalid', (done) => {
      request(app)
        .post('/password/save')
        .send({ token: 'invalid_token', password: 'new_password' })
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.all.keys(['data', 'message', 'success']);
          expect(res.body.success).to.be.a('boolean').to.be.false;
          expect(res.body.message).to.be.a('string').that.is.not.empty;
          done();
        });
    });

    it('should succeed if token is valid', (done) => {
      Customer.find({ email: newCustomer.email })
        .then((found) => {
          request(app)
            .post('/password/save')
            .send({ token: found[0].reset_password_token, password: 'new3passwor' })
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              expect(res.body).to.be.an('object');
              expect(res.body).to.have.all.keys(['data', 'message', 'success']);
              expect(res.body.success).to.be.a('boolean').to.be.true;
              expect(res.body.message).to.be.a('string').that.is.not.empty;
              done();
            });

        })
        .catch(console.log);
    });
  });

  after((done) => {
    Customer.deleteMany({ email: { $in: [newCustomer.email] } })
      .then(() => done())
      .catch(console.log);
  });

});
