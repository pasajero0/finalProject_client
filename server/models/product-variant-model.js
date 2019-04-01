const mongoose = require('mongoose');
const Counter = require('./counter-model');

const productVariantSchema = mongoose.Schema({
  _id: String,
  added: {
    type: Number
  },
  productId: {
    required: [true, 'Product ID is required'],
    type: String
  },
  size: {
    type: String
  },
  color: {
    type: String
  },
  inStock: {
    type: Number
  }
}, { collection: 'productVariants' });

productVariantSchema.options.toJSON = {
  transform: (doc, ret, options) => {
    ret.id = ret._id;
    ret.added = new Date(new Date().setTime(ret.added)).toUTCString();
    delete ret._id;
    delete ret.__v;
    return ret;
  }
};

function addProductVariantId(next){
  const productVariant = this;
  if (!productVariant._id) {
    Counter.findOne({ subject: 'product-variant' })
      .then((res) =>{
        productVariant._id = res.count + 1;
        Counter.updateOne({_id: res._id}, { $inc: { count: 1 }})
          .catch(console.log);
        next();
      }).catch(console.log);
  }else{
    next();
  }
}
function addCreatedDate(next) {
  const productVariant = this;
  if (!productVariant.added) {
    productVariant.added = new Date().getTime();
  }
  next();
}
productVariantSchema.pre('save', addProductVariantId);
productVariantSchema.pre('save', addCreatedDate);

module.exports = mongoose.model('ProductVariant', productVariantSchema);
