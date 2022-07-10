const { listProducts } = require("../../services/productsServices");
const { dailyCalorieIntake } = require("../../helpers");
const { notRecommendedProducts } = require("../../helpers");
const { User } = require("../../models");

const getLoggedUserDietAdvice = async (req, res) => {
  const { _id } = req.user;
  // const _id = "62c9cdeb55f480fbffaba60c";
  const { height, age, currentWeight, desiredWeight, bloodType } =
    req.body.userData;
  const userDailyCalorieIntake = dailyCalorieIntake(
    height,
    age,
    currentWeight,
    desiredWeight,
    bloodType
  );
  const products = await listProducts();
  const userNotRecommendedProducts = notRecommendedProducts(
    products,
    bloodType
  );
  const result = await User.findByIdAndUpdate(
    _id,
    {
      userInfo: { height, age, currentWeight, desiredWeight, bloodType },
      userDailyCalorieIntake,
      userNotRecommendedProducts,
    },
    { new: true }
  );
  console.log(result);
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getLoggedUserDietAdvice;
