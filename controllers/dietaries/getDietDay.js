const { Dietary } = require("../../models");
const { createError } = require("../../errors/createError");

const getDietDay = async (req, res, next) => {
  try {
    const { _id = "62c97435fbc24adb2e6f590a" } = req.user;
    const { date } = req.body;

    const findDay = await Dietary.$where("owner")
      .equals(_id)
      .$where("date")
      .equals(date);
    //   .findOne({
    //   owner: _id,
    //   date: date,
    // }).populate("owner", "_id name email");

    if (!findDay) {
      return createError(404, "Not found");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getDietDay;

// const book = async (req, res, next) => {
// const { _id } = req.user;
// // const id = "62c97435fbc24adb2e6f590a";
// const { date, product, weight } = req.body;
// const findDay = await Dietary.findOne({
//   owner: _id,
//   date: date,
// }).populate("owner", "_id name email");

// if (!findDay) {
//   return createError(404, "Not found");
// }

// const addDay = await Dietary.create({
// owner: _id,
//     date: date,
//     products: [
//       {
//         product: product,
//         weight: weight, // in gramm
//       },
//     ],
//   });

//   console.log(addDay);

//   res.status(201).json({
//     status: "OK",
//     code: 201,
//     data: {
//       result: addDay,
//     },
//   });
// };
