const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const userRouter = require("./routes/api/users");

const app = express();

const productsRouter = require("./routes/api/productsApi");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(cors());
app.use(express.json());
app.use(logger(formatsLogger));

app.use("/api/users", userRouter);
app.use("/api/v1/products", productsRouter);

app.use((_, res, next) => {
  next({ status: 404, message: "Not found" });
});

app.use((err, _, res, next) => {
  const { status = 500, message = "Internal Server Error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
