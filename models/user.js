const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = Schema();

const joiUserInfoSchema = Joi.object({
  height: Joi.string().required(),
  age: Joi.string().required(),
  currentWeight: Joi.string().required(),
  desiredWeight: Joi.string().required(),
  bloodType: Joi.string().required(),
});

const User = model("user", userSchema);

module.exports = {
  User,
  joiUserInfoSchema,
};
