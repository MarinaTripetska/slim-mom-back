const { Schema, model } = require("mongoose");
// const Joi = require("joi");

const dietarySchema = Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    date: {
      type: String,
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "product",
        },
        weightGrm: Number,
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

// const joiDietarySchema = Joi.object({
//   date: Joi.string().required(),
//   products: Joi.array().object().keys({
//     product: Joi.object().required(),
//     weightGrm: Joi.number().required(),
//   }),
// });

const Dietary = model("dietary", dietarySchema);
module.exports = { Dietary };
