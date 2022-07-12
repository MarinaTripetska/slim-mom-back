const express = require("express");
const { ctrlWrapper, auth } = require("../../middlewares");
const { dietaryCtrl } = require("../../controllers");

const router = express.Router();

router.get("/", auth, ctrlWrapper(dietaryCtrl.getDailyDiet));

router.post("/", auth, ctrlWrapper(dietaryCtrl.createDailyDiet));

router.patch("/", auth, ctrlWrapper(dietaryCtrl.updateDailyDiet));

router.delete("/:productId", auth, ctrlWrapper(dietaryCtrl.deleteDailyDiet));

module.exports = router;
