const { listProducts } = require("../../services/productsServices");
const { dailyCalorieIntake } = require("../../helpers");
const { notRecommendedProducts } = require("../../helpers");
const { User } = require("../../models");

const getLoggedUserDietAdvice = async (req, res) => {
  const { _id } = req.user;
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

  res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        userInfo: result.userInfo,
        userDailyCalorieIntake: result.userDailyCalorieIntake,
        userNotRecommendedProducts: result.userNotRecommendedProducts,
      },
    },
  });
};

module.exports = getLoggedUserDietAdvice;
