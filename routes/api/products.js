const express = require("express");

// const {
//   getAllProducts,
//   getProductsForQuery,
// } = require("../../controllers/products");
const {
  productsCtrl: { getAllProducts, getProductsForQuery },
} = require("../../controllers");

const router = express.Router();

router.get("/", getAllProducts);

router.get("/search", getProductsForQuery);

module.exports = router;
