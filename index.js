const mongoose = require("mongoose");
const app = require("./app");
const { PORT, DB_HOST } = require("./helpers/env");

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
  })
  .then(() => {
    app.listen(PORT);
    console.log(`Server running. Use our API on port: ${PORT}`);
  })
  .catch((error) => {
    console.log(`ERROR: ${error.message}`);
    process.exit(1);
  });
