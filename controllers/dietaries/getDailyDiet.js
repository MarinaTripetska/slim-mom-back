const { dietaryService } = require("../../services");

const getDailyDiet = async (req, res) => {
  const { _id } = req.user;

  const result = await dietaryService.getDietary(_id, req.body);

  res.status(200).json({
    status: "OK",
    code: 200,
    data: {
      result: result,
    },
  });
};

module.exports = getDailyDiet;
