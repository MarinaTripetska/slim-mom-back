const { Dietary } = require("../../models");

const createDietary = async (_id, payload) => {
  const { date, products = [] } = payload;

  const dietaryExist = await Dietary.findOne({ owner: _id })
    .where("date")
    .equals(date)
    .populate("owner", "name email")
    .populate({
      path: "products.product",
      select: "title calories",
    });

  if (dietaryExist) {
    throw new Error("Dietary already exists");
  }

  return await Dietary.create({ owner: _id, date, products });
};

module.exports = createDietary;
