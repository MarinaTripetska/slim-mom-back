const { dietaryService } = require("../../services");

const createDailyDiet = async (req, res, next) => {
  const { _id } = req.user;

  const result = await dietaryService.createDietary(_id, req.body);

  res.status(201).json({
    status: "Create",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = createDailyDiet;
