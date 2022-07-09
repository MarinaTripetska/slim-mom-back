const { Schema, model } = require("mongoose");

const schemaDietDay = Schema(
  {
    date: {
      type: String,
    },
    products: {
      type: Array,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const DietDay = model("daytime", schemaDietDay);

module.exports = { DietDay };
