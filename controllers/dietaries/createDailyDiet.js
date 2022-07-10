const { createError } = require("../../errors/createError");
const { dietaryService } = require("../../services");

const createDailyDiet = async (req, res) => {
  // const { id: userId } = req.user;
  const { date, products, userId } = req.body;

  const result = dietaryService.createDietary(userId, { date, products });

  if (!result) {
    throw createError(404, "Not found");
  }

  res.status(200).json({
    status: "Create",
    code: 201,
    data: {
      ...result,
    },
  });
};

module.exports = createDailyDiet;
