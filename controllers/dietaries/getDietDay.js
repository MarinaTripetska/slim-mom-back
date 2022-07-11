const { Dietary } = require("../../models");

const getDietDay = async (req, res) => {
  const { _id } = req.user;
  const { date } = req.body;

  const findDay = await Dietary.find({ date: date, owner: _id }).populate({
    path: "products.product",
    select: "_id title calories",
  });

  res.status(200).json({
    status: "OK",
    code: 200,
    data: {
      result: findDay,
    },
  });
};

module.exports = getDietDay;
