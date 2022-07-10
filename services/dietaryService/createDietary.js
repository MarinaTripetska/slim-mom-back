const { createError } = require("../../errors/createError");
const { Dietary } = require("../../models");

const createDietary = async (_id, payload) => {
  const { date, products } = payload;

  const dietaryExist = await Dietary.findOne({ owner: _id })
    .where("date")
    .equals(date);

  if (dietaryExist) {
    throw createError(404, "Dietary already exists.");
  }

  return await Dietary.create({
    products,
    date,
    owner: _id,
  });
};

module.exports = createDietary;
