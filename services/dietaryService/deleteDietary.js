const { Dietary } = require("../../models");

const deleteDietary = async (_id, productId, date) => {
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

  if (res === null) {
    throw new Error("Wrong date");
  }
  return res;
};

module.exports = deleteDietary;
