const { createError } = require("../../errors/createError");
const { Dietary } = require("../../models");

const deleteDietary = async (_id, productId, payload) => {
  const { date } = payload;

  const res = await Dietary.findOneAndUpdate(
    { date: date, owner: _id },
    { $pull: { products: { _id: productId } } },
    { new: true }
  )
    .populate("owner", "name email")
    .populate({
      path: "products.product",
      select: "title calories",
    });

  if (!res) {
    throw createError(404, "Not found");
  }

  return res;
};

module.exports = deleteDietary;