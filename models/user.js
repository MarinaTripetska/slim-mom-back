const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    token: {
      type: String,
      default: null,
    },
    userInfo: {
      type: Object,
      default: null,
    },
    userDailyCalorieIntake: {
      type: Number,
      default: "",
    },
    userNotRecommendedProducts: {
      type: Array,
      default: [],
    },
  },
  { versionKey: false, timestamps: true }
);

const joiUserInfoSchema = Joi.object({
  userData: Joi.object({
    height: Joi.string().required(),
    age: Joi.string().required(),
    currentWeight: Joi.string().required(),
    desiredWeight: Joi.string().required(),
    bloodType: Joi.string().required(),
  }),
});

const User = model("user", userSchema);

module.exports = {
  User,
  joiUserInfoSchema,
};
