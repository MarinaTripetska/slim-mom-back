const express = require("express");
const { ctrlWrapper, auth } = require("../../middlewares");
const { dietaryCtrl } = require("../../controllers");

const router = express.Router();

router.get("/", auth, ctrlWrapper(dietaryCtrl.getDietDay));

router.post("/", auth, ctrlWrapper(dietaryCtrl.addDietDay));

router.put("/:productId", auth, ctrlWrapper(dietaryCtrl.updateDailyDiet));

// router.delete("/", ctrlWrapper(dietaryCtrl.deleteDailyDiet));

module.exports = router;
