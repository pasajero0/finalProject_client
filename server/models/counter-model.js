const mongoose = require('mongoose');

const counterSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  subject: {
    type: String,
    enum: ['customer', 'order'],
    unique: true,
    required: [true, 'Subject is required'],
  },
  count: {
    type: Number,
    required: [true, 'E-mail is required'],
  }
});

module.exports = mongoose.model('Counter', counterSchema);
