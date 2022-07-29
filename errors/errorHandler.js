class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  console.log(err.name);
  console.log(err.code);
  console.log(error.message);

  if (err.name === "CastError") {
    const message = `Resource not found`;
    error = new ErrorResponse(message, 404);
  }

  if (err.name === "ValidationError") {
    error = new ErrorResponse(error.message, 400);
  }

  if (err.code === 11000) {
    const message = "Email in use";
    error = new ErrorResponse(message, 409);
  }

  if (err.name === "TypeError") {
    const message = "Email or password is wrong";
    error = new ErrorResponse(message, 401);
  }

  if (error.message === "Not authorized") {
    const message = "Not authorized";
    error = new ErrorResponse(message, 401);
  }

  if (err.name === "JsonWebTokenError") {
    const message = "Invalid token";
    error = new ErrorResponse(message, 401);
  }

  if (err.name === "TokenExpiredError") {
    const message = "Token expired";
    error = new ErrorResponse(message, 401);
  }

  if (err.message === "User not found") {
    error = new ErrorResponse(err.message, 404);
  }

  if (err.message === "Verification has already been passed") {
    error = new ErrorResponse(err.message, 400);
  }
  if (err.message === "Dietary already exists") {
    error = new ErrorResponse(err.message, 404);
  }
  if (err.message === "Wrong date") {
    error = new ErrorResponse(err.message, 404);
  }
  if (err.message === "Dietary not found") {
    error = new ErrorResponse(err.message, 404);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

module.exports = errorHandler;
