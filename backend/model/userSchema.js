const mongoose = require("mongoose");
const { Schema } = mongoose;

const useSchema = new Schema({
  username: String,
  email: String,
  password: String,
  otp: String,
  role: {
    type: String,
    enum: ["user", "merchant", "admin"],
    default: "user",
  },
});

module.exports = mongoose.model("User", useSchema);
