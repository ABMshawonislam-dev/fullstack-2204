const blankInput = require("../helpers/blankInput");
const emailValidator = require("../helpers/emailValidator");
const passwordValidator = require("../helpers/passwordValidator");
const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");

let registrationController = async (req, res) => {
  const { username, email, password } = req.body;

  if (blankInput(username)) {
    res.send({ error: "User name required" });
  } else if (blankInput(email)) {
    res.send({ error: "Email name required" });
  } else if (emailValidator(email)) {
    res.send({ error: "Valid Email required" });
  } else if (blankInput(password)) {
    res.send({ error: "Password required" });
  } else if (passwordValidator(password)) {
    res.send({ error: "Valid Password required" });
  } else {
    let existingUser = await User.find({ email: email });

    if (existingUser.length > 0) {
      res.send({ error: `${email} already in use` });
    } else {
      let otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
      });

      bcrypt.hash(password, 10, function (err, hash) {
        let user = new User({
          username: username,
          email: email,
          password: hash,
          otp: otp,
        });

        user.save();

        res.send({
          username: user.username,
          email: user.email,
          role: user.role,
        });
      });
    }
  }
};

module.exports = registrationController;
