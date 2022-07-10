const { Dietary } = require("../../models");
const { createError } = require("../../errors/createError");

const getDietDay = async (req, res, next) => {
  try {
    const { _id = "62c97435fbc24adb2e6f590a" } = req.user;
    // const id = "62c97435fbc24adb2e6f590a";
    const { date } = req.body;
    const findDay = await Dietary.findOne({
      owner: _id,
      date: date,
    }).populate("owner", "_id name email");

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
