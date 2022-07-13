const express = require("express");

const { ctrlWrapper, validation, auth } = require("../../middlewares");
const { joiUserInfoSchema } = require("../../models/user");

const { userCtrl } = require("../../controllers");

const router = express.Router();

router.get(
  "/nutrition-advice",
  validation(joiUserInfoSchema),
  ctrlWrapper(userCtrl.getNotLoggedUserDietAdvice)
);
router.post(
  "/logged-nutrition-advice",
  validation(joiUserInfoSchema),
  ctrlWrapper(auth),
  ctrlWrapper(userCtrl.getLoggedUserDietAdvice)
);
module.exports = router;
