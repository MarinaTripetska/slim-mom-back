const { Dietary } = require("../../models");
const { createError } = require("../../errors/createError");

const getDietDay = async (req, res, next) => {
  const { _id } = req.user;
  const { date } = req.body;

  const findDay = await Dietary.find({ date: date, owner: _id });

  if (!findDay) {
    throw createError(404, "Not found");
  }

  res.status(200).json({
    status: "OK",
    code: 200,
    data: {
      result: { ...findDay },
    },
  });
};

module.exports = getDietDay;
