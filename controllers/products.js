const { createError } = require("../errors/errorHandler");
const { productService } = require("../services");

const getAllProducts = async (req, res, next) => {
  const products = await productService.listProducts();

  if (!products) {
    throw createError(404, "Not found");
  }

  res.status(200).json({
    status: "OK",
    code: 200,
    data: {
      resultItems: products.length,
      result: products,
    },
  });
};

const getProductsForQuery = async (req, res, next) => {
  const { query = "" } = req.query;
  const products = await productService.listProducts();

  const arrayFoundProducts = [];

  products.filter((prod) => {
    const itemProduct = prod.title.ua.toLowerCase().trim();
    if (itemProduct.includes(query.toLowerCase().trim())) {
      return arrayFoundProducts.push(prod.title.ua);
    }
    return arrayFoundProducts;
  });

  if (!products) {
    throw createError(404, "Not found");
  }

  res.status(200).json({
    status: "OK",
    code: 200,
    data: {
      resultItems: arrayFoundProducts.length,
      result: arrayFoundProducts,
    },
  });
};

module.exports = { getAllProducts, getProductsForQuery };
