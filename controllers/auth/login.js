const { User } = require("../../models");
const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !user.comparePassword(password)) {
    throw new Unauthorized("Email or password is wrong");
  }

  let { _id: id, token } = user;

  const payload = {
    id,
  };

  token = jwt.sign(payload, SECRET_KEY);

  await User.findByIdAndUpdate(id, { token }, { expiresIn: "1h" });

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      token,
      user: {
        email,
        name: user.name,
      },
    },
  });
};

module.exports = login;
