const { Product } = require("../models/product");

const getProductsForQuery = async (req, res, next) => {
  try {
    const { query } = req.params;
    const products = await Product.find({ title: { ua: query } });
    res.status(200).json({ code: 200, data: products });
  } catch (error) {
    next(error);
  }
};

module.exports = getProductsForQuery;
