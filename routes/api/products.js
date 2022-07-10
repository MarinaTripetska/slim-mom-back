const express = require("express");
const { ctrlWrapper } = require("../../middlewares");
const {
  productsCtrl: { getAllProducts, getProductsForQuery },
} = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(getAllProducts));

router.get("/search", ctrlWrapper(getProductsForQuery));

module.exports = router;
