const express = require("express");

const { getProducts } = require("../../controllers/controllersProducts");

const router = express.Router();

router.get("/", getProducts);

module.exports = router;
