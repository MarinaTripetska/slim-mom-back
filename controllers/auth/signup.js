const { User } = require("../../models");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  await User.findOne({ email });
  const newUser = new User({ name, email });
  newUser.setPassword(password);
  await newUser.save();

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        name,
        email,
      },
    },
  });
};

module.exports = signup;
