const mongoose = require("mongoose");

let mongoConfig = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.ctphhq0.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    )
    .then(() => console.log("Connected!"));
};

// mongodb+srv://real:idVjIvjmAtvPxchJ@cluster0.ctphhq0.mongodb.net/ecom?retryWrites=true&w=majority

module.exports = mongoConfig;
