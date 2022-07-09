const express = require("express");
const { ctrlWrapper } = require("../../middlewares");
const getDietDay = require("../../controllers/dietDays");

const router = express.Router();

router.get("/", ctrlWrapper(getDietDay));

module.exports = router;
