const { Dietary } = require("../../models");
const findDietary = require("./findDietary");

const createDietary = async (userId, dietary) => {
  const { date, products } = dietary;

  const userDietary = await findDietary(userId, date);

  if (userDietary) {
    // return this userDietary
  }

  return await Dietary.create({
    owner: userId,
    date,
    products: [...products],
  });
};

module.exports = createDietary;
