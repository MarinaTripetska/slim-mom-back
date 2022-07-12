const { createError } = require("../../errors/createError");
const { dietaryService } = require("../../services");

const updateDailyDiet = async (req, res, next) => {
  const { id: userId } = req.user;

  const result = await dietaryService.updateDietary(userId, req.body);

  if (!result) {
    throw createError(404, "Not found");
  }

  res.status(200).json({
    status: "OK",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateDailyDiet;
