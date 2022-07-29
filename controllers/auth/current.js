const current = async (req, res, next) => {
  const {
    tokens,
    email,
    name,
    userInfo,
    userDailyCalorieIntake,
    userNotRecommendedProducts,
  } = req.user;

  res.status(200).json({
    status: "Success",
    code: 200,
    data: {
      user: {
        tokens,
        email,
        name,
        userInfo,
        userDailyCalorieIntake,
        userNotRecommendedProducts,
      },
    },
  });
};

module.exports = current;
