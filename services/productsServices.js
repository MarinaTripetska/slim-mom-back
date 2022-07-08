const { Product } = require("../models/product");

const listProducts = async () => {
  return await Product.find();
};

module.exports = {
  listProducts,
};
