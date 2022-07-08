const express = require("express");
// const auth = require("../../middlewares/auth");
const {
  getProductsForQuery,
} = require("../../controllers/controllersProducts");

const router = express.Router();

router.get("/:query", getProductsForQuery);

module.exports = router;
