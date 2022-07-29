const signup = require("./signup");
const login = require("./login");
const refreshTokens = require("./refreshToken");
const logout = require("./logout");
const current = require("./current");

module.exports = {
  signup,
  login,
  logout,
  current,
  refreshTokens,
};
