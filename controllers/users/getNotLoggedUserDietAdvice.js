const { Product } = require("../../models");

const getNotLoggedUserDietAdvice = async (req, res) => {
  const { height, age, currentWeight, desiredWeight, bloodType } = req.body;
  const dailyCalorieIntake =
    10 * currentWeight +
    6.25 * height -
    5 * age -
    161 -
    10 * (currentWeight - desiredWeight);
  console.log(dailyCalorieIntake.toString());

  const result = await Product.find();
  const notRecommendedProducts = result
    .filter((product) => product.groupBloodNotAllowed[bloodType] === true)
    .map((product) => product.categories[0])
    .filter((val, ind, arr) => arr.indexOf(val) === ind);

  res.json({
    status: "success",
    code: 200,
    data: {
      nutritionAdvice: {
        dailyCalorieIntake,
        notRecommendedProducts,
      },
    },
  });
};

module.exports = getNotLoggedUserDietAdvice;

// "ФОРМУЛА ДЛЯ РОЗРАХУНКУ ДЕННОЇ НОРМИ КАЛОРІЙ ЖІНКАМ
// 10 * вага + 6.25 * зріст - 5 * вік - 161 - 10 * (вага - бажана вага)"
