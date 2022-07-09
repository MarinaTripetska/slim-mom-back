const express = require("express");

const { ctrlWrapper, validation } = require("../../middlewares");
const { joiUserInfoSchema } = require("../../models/user");

const { users: ctrl } = require("../../controllers");

const router = express.Router();

router.get(
  "/getNutritionAdvice",
  validation(joiUserInfoSchema),
  ctrlWrapper(ctrl.getNotLoggedUserDietAdvice)
);

module.exports = router;
