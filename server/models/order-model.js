const mongoose = require('mongoose');
const validator = require('validator');
const Counter = require('./counter-model');

const ProductSchema = mongoose.Schema({
  name: String,
  picture: String,
  slug: String,
  price: Number,
  quantity: Number
});
const StagesSchema = mongoose.Schema({
  new: Number,
  payed: Number,
  dispatched: Number,
  received: Number
});

const orderSchema = mongoose.Schema({
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
    validate: {
      isAsync: false,
      validator: validator.isEmail,
      message: props => `${props.value} is not a valid e-mail!`
    }
  },
  first_name: {
    type: String,
    required: [true, 'first name is required'],
    minlength: [2, 'First name has to be longer']
  },
  last_name: {
    type: String,
    required: [true, 'last name is required'],
    minlength: [2, 'Last name has to be longer']
  },
  city: {
    type: String,
    required: [true, 'city is required'],
  },
  zip: {
    type: String,
    required: [true, 'zip is required'],
  },
  address: {
    type: String,
    required: [true, 'address is required'],
  },
  phone: {
    type: String,
    required: [true, 'phone is required'],
  },
  card_number: {
    type: String,
    required: [true, 'card_number is required'],
  },
  products: {
    type: [ProductSchema],
    required: [true, 'products are required'],
    default: undefined,
  },
  total: {
    type: Number,
    required: [true, 'total is required'],
  },
  count: {
    type: Number,
    required: [true, 'count is required'],
  },
  stages: {
    type: StagesSchema,
  },
  tracking_number: {
    type: String
  },
});

orderSchema.options.toJSON = {
  transform: (doc, ret, options) => {
    ret.id = ret._id+'';
    ret.creation_date = new Date(new Date().setTime(ret.creation_date)).toUTCString();
    delete ret.password;
    delete ret._id;
    delete ret.__v;
    return ret;
  }
};

function addCreatedDate(next) {
  const order = this;
  if (!order.creation_date) {
    order.creation_date = new Date().getTime();
  }
  next();
}

function addLeadingZeros(n, length = 10) {
  return '0'.repeat(length - n.toString().length) + n;
}

function addOrderNumber(next){
  const order = this;
  if (!order.number) {
    Counter.findOne({ subject: 'order' })
      .then((res) =>{
        order.number = addLeadingZeros(res.count + 1);
        Counter.updateOne({_id: res._id}, { $inc: { count: 1 }})
          .catch(()=>{});
        next();
      }).catch(console.log);
  }else{
    next();
  }
}

orderSchema.pre('save', addOrderNumber);

orderSchema.pre('save', addCreatedDate);

module.exports = mongoose.model('Order', orderSchema);
