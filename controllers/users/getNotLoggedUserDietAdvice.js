const { listProducts } = require("../../services/productsServices");
const { dailyCalorieIntake } = require("../../helpers");
const { notRecommendedProducts } = require("../../helpers");

const getNotLoggedUserDietAdvice = async (req, res) => {
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

  res.json({
    status: "success",
    code: 200,
    data: {
      nutritionAdvice: {
        userDailyCalorieIntake,
        userNotRecommendedProducts,
      },
    },
  });
};

module.exports = getNotLoggedUserDietAdvice;
