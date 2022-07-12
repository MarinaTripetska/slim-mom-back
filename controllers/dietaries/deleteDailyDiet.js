const { dietaryService } = require("../../services");

const deleteDailyDiet = async (req, res, next) => {
  const { productId } = req.params;
  const { _id: userId } = req.user;

  const result = await dietaryService.deleteDietary(
    userId,
    productId,
    req.body
  );

  res.status(200).json({
    status: "Deleted",
    code: 200,
    message: `Product with id ${productId} deleted`,
    data: {
      result: { result },
    },
  });
};

module.exports = deleteDailyDiet;
