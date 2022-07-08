const Joi = require("joi");
const { Schema, model } = require("mongoose");

const productsSchemaJoi = Joi.object({
  categories: Joi.array().required(),
  weight: Joi.number().required(),
  title: Joi.object().required(),
  calories: Joi.number().required(),
  groupBloodNotAllowed: Joi.array().required(),
});

const schemaProduct = Schema(
  {
    categories: [{ 0: String, required: true }],
    weight: {
      type: Number,
      default: 100,
    },
    title: {
      ru: String,
      ua: String,
    },
    calories: {
      type: Number,
      default: 100,
    },
    groupBloodNotAllowed: [
      {
        0: null,
        1: Boolean,
        2: Boolean,
        3: Boolean,
        4: Boolean,
      },
    ],
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const Product = model("product", schemaProduct);

module.exports = { productsSchemaJoi, Product };
