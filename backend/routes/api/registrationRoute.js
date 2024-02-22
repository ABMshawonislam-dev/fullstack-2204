const express = require("express");
const registrationController = require("../../controllers/registrationController");
const otpController = require("../../controllers/otpController");
const secureApi = require("../../middleware/secureApi");
const _ = express.Router();

_.post("/registration", secureApi, registrationController);
_.post("/otpverification", otpController);

module.exports = _;
