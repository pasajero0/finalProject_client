const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const Counter = require('./counter-model');

const customerSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  creation_date: {
    type: Number
  },
  number: {
    type: String
  },
  email: {
    type: String,
    required: [true, 'E-mail is required'],
    unique: true,
    validate: {
      isAsync: true,
      validator: function emailValidator(v, cb) {
        const data = this;
        if (!validator.isEmail(v)) {
          cb(false);
        } else {
          const customer = mongoose.model('Customer', customerSchema);
          customer.find({email: v, _id: { $ne: data._id } })
            .then((res) => {
              cb(res.length === 0, 'This e-mail already registered');
            })
            .catch(console.log);
        }
      },
      message: props => `${props.value} is not a valid e-mail!`
    }
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password has a least 6 characters long'],
    maxlength: [12, 'Password has to be not longer of 12 characters'],
    validate: {
      validator: (v) => {
        return v.match(/\s/) === null;
      },
      message: 'Default error message'
    }
  },
  first_name: {
    type: String,
    minlength: [2, 'First name has to be longer']
  },
  last_name: {
    type: String,
    minlength: [2, 'Last name has to be longer']
  },
  city: {
    type: String
  },
  zip: {
    type: String
  },
  address: {
    type: String
  },
  phone: {
    type: String
  },
  reset_password_token: {
    type: String
  },
  reset_password_token_time: {
    type: Number
  },
});

customerSchema.options.toJSON = {
  transform: (doc, ret, options) => {
    ret.id = ret._id+'';
    ret.creation_date = new Date(new Date().setTime(ret.creation_date)).toUTCString();
    delete ret.password;
    delete ret._id;
    delete ret.__v;
    return ret;
  }
};

function hashPassword(next) {
  const customer = this;
  if (customer.isModified('password')) {
    customer.password = bcrypt.hashSync(customer.password, bcrypt.genSaltSync(10));
    next();
  }
}

function addCreatedDate(next) {
  const customer = this;
  if (!customer.creation_date) {
    customer.creation_date = new Date().getTime();
  }
  next();
}

function addLeadingZeros(n, length = 10) {
  return '0'.repeat(length - n.toString().length) + n;
}

function addCustomerNumber(next){
  const customer = this;
  if (!customer.number) {
    Counter.findOne({ subject: 'customer' })
      .then((res) =>{
        customer.number = addLeadingZeros(res.count + 1);
        Counter.updateOne({_id: res._id}, { $inc: { count: 1 }})
          .catch(()=>{});
        next();
      }).catch(console.log);
  }else{
    next();
  }
}

customerSchema.pre('save', addCustomerNumber);

customerSchema.pre('save', addCreatedDate);

customerSchema.pre('save', hashPassword);

function comparePassword(candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password);
}

customerSchema.methods.comparePassword = comparePassword;

module.exports = mongoose.model('Customer', customerSchema);
