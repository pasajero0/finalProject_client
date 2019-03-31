const { expect } = require('chai');
const Customer = require('../../models/customer-model');
const { connect } = require('../../config/mongoose');

before((done) => {
  connect()
    .then((res) => done())
    .catch(console.log);
});

describe('Validations: ', () => {

  describe('Required fields', () => {
    const customer = new Customer();
    it('should be invalid if email is empty', (done) => {
      customer.validate((err) => {
        expect(err.errors.email).to.exist;
        done();
      });
    });
    it('should be invalid if password is empty', (done) => {
      customer.validate((err) => {
        expect(err.errors.password).to.exist;
        done();
      });
    });
  });

  describe('Invalid fields', () => {

    it('should be failed if email is not valid', (done) => {
      const customer = new Customer({ email: '222' });
      customer.validate((err) => {
        expect(err.errors.email).to.exist;
        done();
      });
    });
    it('should be failed if password is too short', (done) => {
      const customer = new Customer({ password: '1' });
      customer.validate((err) => {
        expect(err.errors.password).to.exist;
        done();
      });
    });
    it('should be failed if password is too long', (done) => {
      const customer = new Customer({ password: '1111111111111111111111' });
      customer.validate((err) => {
        expect(err.errors.password).to.exist;
        done();
      });
    });
    it('should be failed if first name is too short', (done) => {
      const customer = new Customer({ first_name: '2' });
      customer.validate((err) => {
        expect(err.errors.first_name).to.exist;
        done();
      });
    });
    it('should be failed if last name is too short', (done) => {
      const customer = new Customer({ last_name: '2' });
      customer.validate((err) => {
        expect(err.errors.last_name).to.exist;
        done();
      });
    });
  });

  describe('Valid data', () => {
    it('should be succeed with valid data', (done) => {
      const customer = new Customer({
        password: '098yuiRTY',
        first_name: 'john',
        last_name: 'smith',
        email: 'uniqueemail@gmail.com'
      });
      customer.validate((err) => {
        if (err !== null) {
          console.log(err.errors);
        }
        expect(err).to.be.a('null');
        done();
      });
    });
  });

});
