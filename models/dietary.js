const { Schema, model } = require("mongoose");

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
        },
        wieghtGrm: Number,
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const Dietary = model("dietary", dietarySchema, "dietary");

module.exports = { Dietary };
