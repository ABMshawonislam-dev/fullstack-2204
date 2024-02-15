const express = require("express");
const _ = express.Router();
const registrationRoute = require("./registrationRoute");

_.use("/auth", registrationRoute);

module.exports = _;
