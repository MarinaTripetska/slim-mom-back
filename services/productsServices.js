const { Product } = require("../models");

const listProducts = async () => {
  return await Product.find();
};

module.exports = {
  listProducts,
};
