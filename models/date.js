const { Schema, model } = require("mongoose");

const schemaDate = Schema(
  {
    date: {
      products: Array,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const Date = model("date", schemaDate);

module.exports = { Date };
