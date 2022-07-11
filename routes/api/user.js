const express = require("express");

const { ctrlWrapper, validation, auth } = require("../../middlewares");
const { joiUserInfoSchema } = require("../../models/user");

const { userCtrl } = require("../../controllers");

const router = express.Router();

router.get(
  "/getNutritionAdvice",
  validation(joiUserInfoSchema),
  ctrlWrapper(userCtrl.getNotLoggedUserDietAdvice)
);
router.post(
  "/loggedUserNutritionAdvice",
  validation(joiUserInfoSchema),
  ctrlWrapper(auth),
  ctrlWrapper(userCtrl.getLoggedUserDietAdvice)
);
module.exports = router;
