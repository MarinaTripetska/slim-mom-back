const { Dietary } = require("../../models");
const { createError } = require("../../errors/createError");

const getDietDay = async (req, res, next) => {
  try {
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

    if (!findDay) {
      return createError(404, "Not found");
    }

    res.status(200).json({
      status: "OK",
      code: 200,
      data: {
        result: findDay,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getDietDay;
