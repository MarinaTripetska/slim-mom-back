const { Dietary } = require("../../models");

const getDietDay = async (req, res) => {
  const { _id } = req.user;
  const { date } = req.body;

    const findDay = await Dietary.findOne({
      owner: _id,
      date: date,
    })
      .populate("owner", "_id name email")
      .populate({
        path: "products.product",
        select: "title calories",
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
