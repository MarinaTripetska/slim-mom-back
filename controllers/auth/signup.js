const { User } = require("../../models");
const { Conflict } = require("http-errors");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with "${email}" is already registered`);
  }

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