const { createError } = require("../../errors/createError");

const current = async (req, res, next) => {
  const user = req.user;

  if (!user) {
    throw createError(404);
  }

  res.status(200).json({
    status: "Success",
    code: 200,
    data: {
      user: {
        email: user.email,
        name: user.name,
      },
    },
  });
};

module.exports = current;
