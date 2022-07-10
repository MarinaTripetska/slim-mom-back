const express = require("express");

const { ctrlWrapper, validation } = require("../../middlewares");
const { joiUserInfoSchema } = require("../../models/user");

const { userCtrl } = require("../../controllers");

const router = express.Router();

router.get(
  "/getNutritionAdvice",
  validation(joiUserInfoSchema),
  ctrlWrapper(userCtrl.getNotLoggedUserDietAdvice)
);

// TODO: need auth midlwr
router.put("/daily-diet", userCtrl.updateDailyDiet);
// TODO: need auth midlwr
router.delete("/daily-diet", userCtrl.deleteDailyDiet);

module.exports = router;
