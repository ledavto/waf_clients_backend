const app = require("./app");
const mongoose = require("mongoose");
require("colors");

console.log(DB_HOST);
const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful".bgBrightGreen);
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
