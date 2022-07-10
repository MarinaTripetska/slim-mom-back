const { Dietary } = require("../../models");

const updateUserDietary = async (userId, dietary) => {
  const { date, products } = dietary;
  return await Dietary.find({ owner: userId })
    .where(date)
    .update(products, { new: true });
};

module.exports = {
  updateUserDietary,
};
