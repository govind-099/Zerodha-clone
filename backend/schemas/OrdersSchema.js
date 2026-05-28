const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,//to buy ya sell keliye 
});

module.exports = { OrdersSchema };
