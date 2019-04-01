const { expect } = require('chai');
const Order = require('../../models/order-model');
const { connect } = require('../../config/mongoose');

const fields = {
  email: 'email@example.com',
  first_name: 'Bill',
  last_name: 'Clinton',
  city: 'Washington',
  zip: '00234',
  address: 'Washington St. 32',
  phone: '122345678',
  card_number: '1234567898762345',
  products: [
    { name: 'product name', picture: 'image src', slug: '123456', price: 9876, quantity: 3 }
  ],
  total: 222,
  count: 3,
};


describe('Validations: ', () => {

  describe('Required fields', () => {

    it('should be invalid if email is empty', (done) => {
      const { email, ...otherFields } = fields;
      const order = new Order(otherFields);
      order.validate((err) => {
        expect(err.errors.email).to.exist;
        done();
      });
    });
    it('should be invalid if first name is empty', (done) => {
      const { first_name, ...otherFields } = fields;
      const order = new Order(otherFields);
      order.validate((err) => {
        expect(err.errors.first_name).to.exist;
        done();
      });
    });
    it('should be invalid if last name is empty', (done) => {
      const { last_name, ...otherFields } = fields;
      const order = new Order(otherFields);
      order.validate((err) => {
        expect(err.errors.last_name).to.exist;
        done();
      });
    });
    it('should be invalid if city is empty', (done) => {
      const { city, ...otherFields } = fields;
      const order = new Order(otherFields);
      order.validate((err) => {
        expect(err.errors.city).to.exist;
        done();
      });
    });
    it('should be invalid if zip is empty', (done) => {
      const { zip, ...otherFields } = fields;
      const order = new Order(otherFields);
      order.validate((err) => {
        expect(err.errors.zip).to.exist;
        done();
      });
    });
    it('should be invalid if address is empty', (done) => {
      const { address, ...otherFields } = fields;
      const order = new Order(otherFields);
      order.validate((err) => {
        expect(err.errors.address).to.exist;
        done();
      });
    });
    it('should be invalid if phone is empty', (done) => {
      const { phone, ...otherFields } = fields;
      const order = new Order(otherFields);
      order.validate((err) => {
        expect(err.errors.phone).to.exist;
        done();
      });
    });
    it('should be invalid if card number is empty', (done) => {
      const { card_number, ...otherFields } = fields;
      const order = new Order(otherFields);
      order.validate((err) => {
        expect(err.errors.card_number).to.exist;
        done();
      });
    });
    it('should be invalid if products is empty', (done) => {
      const { products, ...otherFields } = fields;
      const order = new Order(otherFields);
      order.validate((err) => {
        expect(err.errors.products).to.exist;
        done();
      });
    });
    it('should be invalid if total is empty', (done) => {
      const { total, ...otherFields } = fields;
      const order = new Order(otherFields);
      order.validate((err) => {
        expect(err.errors.total).to.exist;
        done();
      });
    });
    it('should be invalid if count is empty', (done) => {
      const { count, ...otherFields } = fields;
      const order = new Order(otherFields);
      order.validate((err) => {
        expect(err.errors.count).to.exist;
        done();
      });
    });
  });

  describe('Invalid fields', () => {

    it('should be failed if email is not valid', (done) => {
      const order = new Order({ ...fields, email: '222' });
      order.validate((err) => {
        expect(err.errors.email).to.exist;
        done();
      });
    });
    it('should be failed if first name is too short', (done) => {
      const order = new Order({ ...fields, first_name: '2' });
      order.validate((err) => {
        expect(err.errors.first_name).to.exist;
        done();
      });
    });
    it('should be failed if last name is too short', (done) => {
      const order = new Order({ ...fields, last_name: '2' });
      order.validate((err) => {
        expect(err.errors.last_name).to.exist;
        done();
      });
    });
  });
  describe('Valid data', () => {
    it('should be succeed with valid data', (done) => {
      const order = new Order(fields);
      order.validate((err) => {
        if (err !== null) {
          console.log(err.errors);
        }
        expect(err).to.be.a('null');
        done();
      });
    });
  });
});
