const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Customer = require('../models/customer-model');

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  function (username, password, done) {
    Customer.findOne({email: username})
      .then((customer) => {
        if (!customer) {
          return done(null, false, {
            message: 'The email is not registered.',
            data: { email: 'The email is not registered' }
          });
        }
        if (!customer.comparePassword(password)) {
          return done(null, false, {
            message: 'Incorrect password.',
            data: { password: 'Incorrect password' }
          });
        }
        return done(null, customer);
      })
      .catch(console.log);
  }
));

passport.serializeUser((customer, cb) => {
  cb(null, customer.id);
});

passport.deserializeUser((id, cb) => {
  Customer.findById(id)
    .then((customer) => {
      cb(null, customer === null ? false : customer.toJSON());
    })
    .catch(console.log);
});
