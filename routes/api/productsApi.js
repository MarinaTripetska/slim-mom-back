const express = require("express");
// const auth = require("../../middlewares/auth");
const {
  getAll,
  getProductsForQuery,
} = require("../../controllers/controllersProducts");

const router = express.Router();

router.get("/", getAll);

router.get("/:query", getProductsForQuery);

module.exports = router;
