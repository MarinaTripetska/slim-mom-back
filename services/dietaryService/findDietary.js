const { Dietary } = require("../../models");

const findDietary = async (userId, date) => {
  return await Dietary.find({ owner: userId }).where(date);
};

module.exports = findDietary;
