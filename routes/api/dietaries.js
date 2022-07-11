const express = require("express");
const { ctrlWrapper, auth } = require("../../middlewares");
const { dietaryCtrl } = require("../../controllers");

const router = express.Router();

router.get("/", auth, ctrlWrapper(dietaryCtrl.getDietDay));

router.post("/", auth, ctrlWrapper(dietaryCtrl.createDailyDiet));

router.patch("/", auth, ctrlWrapper(dietaryCtrl.updateDailyDiet));

module.exports = router;
