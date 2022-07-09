const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const authRouter = require("./routes/api/auth");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(cors());
app.use(express.json());
app.use(logger(formatsLogger));

app.use("/api/auth", authRouter);

app.use((_, res, next) => {
  next({ status: 404, message: "Not found" });
});

app.use((err, _, res, next) => {
  const { status = 500, message = "Internal Server Error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
