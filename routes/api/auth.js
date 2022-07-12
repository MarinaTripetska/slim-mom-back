const express = require("express");
const { joiRegisterSchema, joiLoginSchema } = require("../../models");
const { authCtrl: ctrl } = require("../../controllers");
const { auth, ctrlWrapper, validation } = require("../../middlewares");

const router = express.Router();

router.post("/signup", validation(joiRegisterSchema), ctrlWrapper(ctrl.signup));

router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

router.get("/current", auth, ctrlWrapper(ctrl.current));

module.exports = router;
