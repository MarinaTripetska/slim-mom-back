const express = require("express");

const {
  getAllProducts,
  getProductsForQuery,
} = require("../../controllers/controllersProducts");

const router = express.Router();

router.get("/", getAllProducts);

router.get("/search", getProductsForQuery);

module.exports = router;
