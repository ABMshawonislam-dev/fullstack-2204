const express = require("express");
const _ = express.Router();
const apiRoutes = require("./api");

const apiBaseUrl = process.env.API_BASE_URL;

_.use(apiBaseUrl, apiRoutes);

_.use(apiBaseUrl, (req, res) => res.send("No Routes Found"));

module.exports = _;
