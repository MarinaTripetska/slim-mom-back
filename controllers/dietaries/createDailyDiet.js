const { createError } = require("../../errors/createError");
const { dietaryService } = require("../../services");

const createDailyDiet = async (req, res, next) => {
  const { _id } = req.user;

  const result = await dietaryService.createDietary(_id, req.body);
  console.log("result", result);

  if (!result) {
    throw createError(404, "Not found");
  }

  res.status(200).json({
    status: "Create",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = createDailyDiet;
