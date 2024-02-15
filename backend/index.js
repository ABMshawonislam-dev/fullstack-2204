require("dotenv").config();
const express = require("express");
var cors = require("cors");
const app = express();
const mongoConfig = require("./config/mongoConfig");
const routes = require("./routes");

// mongodb+srv://real:idVjIvjmAtvPxchJ@cluster0.ctphhq0.mongodb.net/ecom?retryWrites=true&w=majority
mongoConfig();
app.use(cors());
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello Full stack");
});

app.listen(8000, () => {
  console.log("Port in running");
});
