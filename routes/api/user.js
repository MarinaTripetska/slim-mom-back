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

module.exports = router;
