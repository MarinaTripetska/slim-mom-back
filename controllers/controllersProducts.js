const { Product } = require("../models/product");

const getProducts = async (req, res, next) => {
  try {
    const { query = "" } = req.query;
    const products = await Product.find();
    const arrayFoundProducts = [];
    products.filter((prod) => {
      const itemProduct = prod.title.ua.toLowerCase().trim();
      if (itemProduct.includes(query.toLowerCase().trim())) {
        return arrayFoundProducts.push(prod);
      }
      return arrayFoundProducts;
    });

    res.status(200).json({ code: 200, data: arrayFoundProducts });
  } catch (error) {
    next(error);
  }
};

module.exports = { getProducts };
