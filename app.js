const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const errorHandler = require("./errors/errorHandler");
require("dotenv").config();

const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const {
  userRouter,
  productsRouter,
  dietariesRouter,
  authRouter,
} = require("./routes/api");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(cors());
app.use(express.json());
app.use(logger(formatsLogger));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/v1/users", authRouter, userRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/dietaries", dietariesRouter);

app.use((_, res, next) => {
  next({ status: 404, message: "Not found" });
});

app.use(errorHandler);

module.exports = app;
