const { Schema, model } = require("mongoose");

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

        wieght: Number, // in gramm
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const Dietary = model("dietary", dietarySchema);

module.exports = { Dietary };
