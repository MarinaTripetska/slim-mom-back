const { Dietary } = require("../../models");

const deleteDailyDiet = async (req, res, next) => {
  const { productId } = req.params;
  const { _id } = req.user;
  const { date } = req.body;

  await Dietary.findOneAndUpdate(
    { date: date, owner: _id },
    { $pull: { products: { product: productId } } },
    { new: true }
  );

  res.status(200).json({
    status: "Deleted",
    code: 204,
    message: `Product with id ${productId} deleted`,
  });
};

module.exports = deleteDailyDiet;
