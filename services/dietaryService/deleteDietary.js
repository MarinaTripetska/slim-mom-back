// const { Dietary } = require("../../models");

// const deleteDietary = async (productId, userId, payload) => {
//   const { date, products } = payload;

//   return await Dietary.findOneAndUpdate(
//     {
//       owner: _id,
//       date: date,
//     },
//     { products },
//     { new: true }
//   )
//     .populate("owner", "name email")
//     .populate({
//       path: "products.product",
//       select: "title",
//     });
// };

// module.exports = deleteDietary;
// productId, userId, req.body;
