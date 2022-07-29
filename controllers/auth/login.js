const { User } = require("../../models");
const { updateTokens } = require("../../services");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !user.comparePassword(password)) {
    throw new TypeError();
  }

  let { _id: userId, tokens } = user;

  tokens = await updateTokens(userId);

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      tokens,
      user: {
        email,
        name: user.name,
        userInfo: user.userInfo,
        userDailyCalorieIntake: user.userDailyCalorieIntake,
        userNotRecommendedProducts: user.userNotRecommendedProducts,
      },
    },
  });
};

module.exports = login;
