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
const validCustomerData = {
  password: 'anyPassword',
  first_name: 'bob',
  last_name: 'johnson',
  email: 'bobjohnson@gmail.com'
};
const validAuthData = {
  email: validCustomerData.email,
  password: validCustomerData.password
};

// Auxiliary function.
const authenticatedRequest = (loginDetails, done) => {
  const req = request.agent(app);
  req
    .post('/customers/auth')
    .send(loginDetails)
    .end((error, response) => {
      if (error) {
        throw error;
      }
      done(req);
    });
};


describe('API Integration Tests', () => {

  before((done) => {
    Customer.deleteMany({})
      .then(() => Counter.deleteMany())
      .then(() => newCounter.save())
      .then(() => newCustomer.save())
      .then(() => done())
      .catch(console.log);
  });

  describe('POST /customers', () => {

    it('should fail on missing form fields', (done) => {
      request(app)
        .post('/customers')
        .send({})
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.all.keys(['data', 'message', 'success']);
          expect(res.body.success).to.be.a('boolean').to.be.false;
          expect(res.body.message).to.be.an('string').that.is.not.empty;
          done();
        });
    });

    it('should fail on missing required incoming data', (done) => {
      const emptyCustomerData = {
        password: '',
        first_name: '',
        last_name: '',
        email: ''
      };
      request(app)
        .post('/customers')
        .send(emptyCustomerData)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.all.keys(['data', 'message', 'success']);
          expect(res.body.success).to.be.a('boolean').to.be.false;
          expect(res.body.message).to.be.an('string').that.is.not.empty;
          done();
        });
    });

    it('should fail on invalid incoming data', (done) => {
      const invalidCustomerData = {
        password: 'u',
        first_name: 'a',
        last_name: 'a',
        email: 'c'
      };
      request(app)
        .post('/customers')
        .send(invalidCustomerData)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.all.keys(['data', 'message', 'success']);
          expect(res.body.success).to.be.a('boolean').to.be.false;
          expect(res.body.message).to.be.an('string').that.is.not.empty;
          done();
        });
    });

    it('should add a customer', (done) => {
      request(app)
        .post('/customers')
        .send(validCustomerData)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.all.keys(['data', 'message', 'success']);
          expect(res.body.success).to.be.a('boolean').to.be.true;
          expect(res.body.message).to.be.a('string').that.is.empty;
          let date = new Date(new Date(res.body.data.creation_date)).toUTCString();
          expect(res.body.data.creation_date).to.be.a('string', date);
          expect(res.body.data.number).to.be.a('string').to.have.lengthOf(10);
          expect(res.body.data.email).to.be.a('string', validCustomerData.email);
          expect(mongoose.Types.ObjectId.isValid(res.body.data.id)).to.be.true;
          done();
        });

    });

    it('should fail on same incoming data', (done) => {
      request(app)
        .post('/customers')
        .send(validCustomerData)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.all.keys(['data', 'message', 'success']);
          expect(res.body.success).to.be.a('boolean').to.be.false;
          expect(res.body.message).to.be.an('string').that.is.not.empty;
          done();
        });
    });

  });

  describe('/POST customers/auth', () => {
    it('should fail on missing password or username', (done) => {
      request(app)
        .post('/customers/auth')
        .send({})
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.all.keys(['message', 'success']);
          expect(res.body.success).to.be.a('boolean').to.be.false;
          expect(res.body.message).to.be.an('string').that.is.not.empty;
          done();
        });
    });

    it('should fail to log in on incorrect password or email', (done) => {
      request(app)
        .post('/customers/auth')
        .send({ email: 'foo', password: 'bar' })
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.all.keys(['data', 'message', 'success']);
          expect(res.body.success).to.be.a('boolean').to.be.false;
          expect(res.body.message).to.be.an('string').that.is.not.empty;
          done();
        });
    });

    it('should succeed with correct password and username', (done) => {
      request(app)
        .post('/customers/auth')
        .send(validAuthData)
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

  describe('/GET customers/logout', () => {
    it('should successfully logout', (done) => {
      request(app)
        .get('/customers/logout')
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

  describe('/GET customers/profile', () => {

    it('should not load data without authentication', (done) => {
      request(app)
        .get('/customers/profile')
        .end((err, res) => {
          expect(res.statusCode).to.equal(302);
          done();
        });
    });

    it('should fetch user data', (done) => {

      authenticatedRequest(validAuthData, (request) => {
        request
          .get('/customers/profile')
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.all.keys(['data', 'message', 'success']);
            expect(res.body.success).to.be.a('boolean').to.be.true;
            expect(res.body.message).to.be.a('string').that.is.empty;
            let date = new Date(new Date(res.body.data.creation_date)).toUTCString();
            expect(res.body.data.creation_date).to.be.a('string', date);
            expect(res.body.data.number).to.be.a('string').to.have.lengthOf(10);
            expect(res.body.data.email).to.be.a('string', validCustomerData.email);
            expect(mongoose.Types.ObjectId.isValid(res.body.data.id)).to.be.true;
            done();
          });
      });
    });

    it('should update user data', (done) => {

      authenticatedRequest(validAuthData, (request) => {
        request
          .put('/customers/profile')
          .send({ phone : '123456' })
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.all.keys(['data', 'message', 'success']);
            expect(res.body.success).to.be.a('boolean').to.be.true;
            expect(res.body.message).to.be.a('string').that.is.empty;
            done();
          });
      });
    });
  });

  after((done) => {
    Customer.deleteMany({ email: { $in: [validCustomerData.email, newCustomer.email] } })
      .then(() => done())
      .catch(console.log);
  });

});

