const User = require("../model/userSchema");

let otpController = async (req, res) => {
  const { email, otp } = req.body;

  let existingUser = await User.findOne({ email: email });

  if (existingUser.otp == otp) {
    await User.findOneAndUpdate({ email: email }, { otp: "" });
    res.send({ success: "Email Verified" });
  } else {
    res.send({ error: "Otp not matched" });
  }
};

module.exports = otpController;
