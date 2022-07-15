const current = async (req, res, next) => {
  const user = req.user;

  res.status(200).json({
    status: "Success",
    code: 200,
    data: {
      user: {
        email: user.email,
        name: user.name,
        userInfo: user.userInfo,
        userDailyCalorieIntake: user.userDailyCalorieIntake,
        userNotRecommendedProducts: user.userNotRecommendedProducts,
      },
    },
  });
};

module.exports = current;
