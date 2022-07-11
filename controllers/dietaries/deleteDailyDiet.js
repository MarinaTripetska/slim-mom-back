// const { dietaryService } = require("../../services");
// const { Dietary } = require("../../models");

const deleteDailyDiet = async (req, res, next) => {
  //   const { productId } = req.params;
  //   const { _id: userId } = req.user;

  //   const result = dietaryService.deleteDietary(productId, userId, req.body);

  //   const dietary = await Dietary.findOne({
  //     owner: userId,
  //     date: req.body.date,
  //   })

  res.status(200).json({
    status: "Deleted",
    code: 200,
    data: {},
  });
};

module.exports = deleteDailyDiet;
