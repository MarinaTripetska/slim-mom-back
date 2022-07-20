const { Schema, model } = require("mongoose");
const Joi = require("joi");

const dietarySchema = Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "product",
          required: true,
        },
        weightGrm: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const joiDietaryDateSchema = Joi.object({
  date: Joi.string().required(),
  products: Joi.array(),
});

const joiDietaryUpdateDateSchema = Joi.object({
  date: Joi.string().required(),
  data: Joi.object({ product: Joi.string(), weightGrm: Joi.number() }),
});

const joiGetDateSchema = Joi.object({
  date: Joi.string().required(),
});

const Dietary = model("dietary", dietarySchema);

module.exports = {
  Dietary,
  joiDietaryDateSchema,
  joiDietaryUpdateDateSchema,
  joiGetDateSchema,
};
