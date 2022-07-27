const { User } = require("../../models");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !user.comparePassword(password)) {
    throw new TypeError();
  }

  let { _id: id, token } = user;

  const payload = {
    id,
  };

  token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

  await User.findByIdAndUpdate(id, { token });

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      token,
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
