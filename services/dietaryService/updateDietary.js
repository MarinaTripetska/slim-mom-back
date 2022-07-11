const { Dietary } = require("../../models");

const updateDietary = async (_id, payload) => {
  const { date, product } = payload;

  return await Dietary.findOneAndUpdate(
    {
      owner: _id,
      date: date,
    },
    { $push: { products: product } },
    { new: true }
  )
    .populate("owner", "name email")
    .populate({
      path: "products.product",
      select: "title calories",
    });
};

module.exports = updateDietary;
