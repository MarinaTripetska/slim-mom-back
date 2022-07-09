const { Date } = require("../../models");
const { createError } = require("../errors/createError");

const getDate = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { date } = req.body;
    const dates = await Date.find({ owner: _id, date }).populate(
      "owner",
      "_id"
    );
    const dateForFind = dates.map((d) => {
      if (d !== date) {
        return createError(404, "Not found");
      }
      return d.products;
    });
    res.status(200).json({
      status: "OK",
      code: 200,
      data: {
        resultItems: dateForFind.length,
        result: dateForFind,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getDate;
