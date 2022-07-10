const { dietaryService } = require("../../services");

const updateDailyDiet = async (req, res, next) => {
  const { dietary } = req.body;
  const { id: userId } = req.user;

  const userDailyDiet = await dietaryService.updateDietary(userId, dietary);

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      userDailyDiet,
    },
  });
};

module.exports = updateDailyDiet;
