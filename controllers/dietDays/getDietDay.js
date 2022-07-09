const { Date } = require("../../models");
const { createError } = require("../../errors/createError");

const getDietDay = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { date } = req.body;
    const findDay = await Date.find({ owner: _id, date: date }).populate(
      "owner",
      "_id"
    );

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
