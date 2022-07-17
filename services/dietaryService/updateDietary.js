const { Dietary } = require("../../models");

const updateDietary = async (userId, payload) => {
  const { date, data } = payload;
  const { product: _id, weightGrm } = data;

  let products = null;

  const dayInfo = await Dietary.findOne({
    owner: userId,
    date: date,
  });

  if (dayInfo) {
    const checkedProduct = dayInfo.products.find(
      (obj) => obj.product.valueOf() === _id
    );

    if (!checkedProduct) {
      products = await Dietary.findOneAndUpdate(
        {
          owner: userId,
          date: date,
        },
        {
          $push: {
            products: data,
          },
        },
        { new: true }
      )
        .populate("owner", "name email")
        .populate({
          path: "products.product",
          select: "title calories",
        });
      return products;
    } else {
      checkedProduct.weightGrm += weightGrm;
    }

    await dayInfo.save();
    products = await Dietary.findOne(dayInfo)
      .populate("owner", "name email")
      .populate({
        path: "products.product",
        select: "title calories",
      });
  } else {
    throw new Error("Wrong date");
  }

  return products;
};

module.exports = updateDietary;
