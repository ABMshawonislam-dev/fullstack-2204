require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes");

app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello Full stack");
});

app.listen(8000, () => {
  console.log("Port in running");
});
