const mongoose = require('mongoose');

const CartSchema = mongoose.Schema(
  {
    userId : {
      type: mongoose.Schema.ObjectId,
      ref:'User',
      required: true,
    },
    productId: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref:'Product'
    },
    quantity:
    {
        type:Number,
        required:true
    },
    totalprice:
    {
        type:Number,
        required:true
    },
  },
  {
    timestamps: true,
  }
);

const cart = mongoose.model('Cart', CartSchema);

module.exports = cart;
