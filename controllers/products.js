const { createError } = require("../errors/createError");
const { listProducts } = require("../services/productsServices");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await listProducts();
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
  } catch (error) {
    next(error);
  }
};

const getProductsForQuery = async (req, res, next) => {
  try {
    const { query = "" } = req.query;
    const products = await listProducts();
    const arrayFoundProducts = [];
    products.filter((prod) => {
      const itemProduct = prod.title.ua.toLowerCase().trim();
      if (itemProduct.includes(query.toLowerCase().trim())) {
        return arrayFoundProducts.push(prod);
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
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllProducts, getProductsForQuery };
