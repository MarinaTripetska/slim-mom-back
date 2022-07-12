const { createError } = require("../../errors/createError");
const { Dietary } = require("../../models");

const getDietary = async (_id, payload) => {
  const { date } = payload;

  const dietary = await Dietary.findOne({
    owner: _id,
    date: date,
  })
    .populate("owner", "_id name email")
    .populate({
      path: "products.product",
      select: "title calories",
    });

  if (!dietary) {
    throw createError(404, "Dietary not found");
  }

  return dietary;
};

module.exports = getDietary;
