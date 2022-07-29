const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const generateAccessToken = (userId) => {
  const payload = {
    userId,
    type: "access",
  };

  return jwt.sign(payload, SECRET_KEY, { expiresIn: "2m" });
};

const generateRefreshToken = (userId) => {
  const payload = {
    userId,
    type: "refresh",
  };

  return {
    id: userId,
    token: jwt.sign(payload, SECRET_KEY, { expiresIn: "4m" }),
  };
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
