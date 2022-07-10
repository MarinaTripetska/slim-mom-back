// const { Schema, model } = require("mongoose");

// const schemaDietDay = Schema(
//   {
//     dietDay: {
//       type: String,
//     },
//     products: {
//       type: Array,
//     },
//     owner: {
//       type: Schema.Types.ObjectId,
//       ref: "user",
//     },
//   },
//   { versionKey: false, timestamps: true }
// );

// const DietDay = model("daytime", schemaDietDay);

// module.exports = { DietDay };

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
        wieghtGrm: Number,
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const Dietary = model("dietary", dietarySchema);
module.exports = { Dietary };
