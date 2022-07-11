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

const Dietary = model("dietaries", dietarySchema);

module.exports = { Dietary };
