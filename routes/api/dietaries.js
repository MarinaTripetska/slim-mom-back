const express = require("express");
const { ctrlWrapper, auth } = require("../../middlewares");
const { dietaryCtrl } = require("../../controllers");

const router = express.Router();

router.get("/", auth, ctrlWrapper(dietaryCtrl.getDietDay));

router.post("/", auth, ctrlWrapper(dietaryCtrl.createDailyDiet));

router.put("/", auth, ctrlWrapper(dietaryCtrl.updateDailyDiet));

router.delete("/:productId", auth, ctrlWrapper(dietaryCtrl.deleteDailyDiet));

module.exports = router;
