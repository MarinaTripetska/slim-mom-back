const express = require("express");
const { ctrlWrapper } = require("../../middlewares");
const { dietaryCtrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(dietaryCtrl.getDietDay));

router.post("/", ctrlWrapper(dietaryCtrl.createDailyDiet));

// TODO: need auth midlwr
router.put("/", ctrlWrapper(dietaryCtrl.updateDailyDiet));
// TODO: need auth midlwr
router.delete("/", ctrlWrapper(dietaryCtrl.deleteDailyDiet));

module.exports = router;
