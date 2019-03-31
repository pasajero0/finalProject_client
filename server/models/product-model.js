const mongoose = require('mongoose');



const productSchema = mongoose.Schema({
  _id: String,
  slug: {
    type: String,
    required:[true, 'The slug is required'],
    unique: true
  },
  added: {
    type: Number
  },
  prices: {
    retail: {
      type: Number
    },
    sale:{
      type: Number
    }
  },
  brand: {
    type: String
  },
  country: {
    type: String
  },
  gender: {
    type: String
  },
  departmentsIds: {
    type: Array
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  pictures: {
    type: Array
  },
  isBrandNew: {
    type: Boolean
  },
  isPopular: {
    type: Boolean
  },
  isAvailable: {
    type: Boolean
  },
  isOnSale: {
    type: Boolean
  },
  rate: {
    type: Number
  }
});

productSchema.options.toJSON = {
  transform: (doc, ret, options) => {
    ret.id = ret._id;
    ret.added = new Date(new Date().setTime(ret.added)).toUTCString();
    delete ret._id;
    delete ret.__v;
    return ret;
  }
};

function addCreatedDate(next) {
  const product = this;
  if (!product.added) {
    product.added = new Date().getTime();
  }
  next();
}

productSchema.pre('save', addCreatedDate);

module.exports = mongoose.model('Product', productSchema);
