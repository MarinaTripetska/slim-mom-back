const { dietaryService } = require("../../services");

const updateDailyDiet = async (req, res, next) => {
  const { id: userId } = req.user;

  const result = await dietaryService.updateDietary(userId, req.body);

  if (!result) {
    throw new Error("Wrong date");
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
