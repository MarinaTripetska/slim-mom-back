const { Schema, model } = require("mongoose");

const productSchema = Schema(
  {
    categories: {
      type: Array,
      required: true,
    },
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
    groupBloodNotAllowed: {
      type: Array,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Product = model("product", productSchema);

module.exports = { Product };
