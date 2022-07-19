const { dietaryService } = require("../../services");

const deleteDailyDiet = async (req, res, next) => {
  const { productId, date } = req.query;
  const { _id: userId } = req.user;

  const result = await dietaryService.deleteDietary(userId, productId, date);

  res.status(200).json({
    status: "Deleted",
    code: 200,
    message: `Product with id ${productId} deleted`,
    data: {
      result,
    },
  });
};

module.exports = deleteDailyDiet;
