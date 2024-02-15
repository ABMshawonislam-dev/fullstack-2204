const express = require("express");
const _ = express.Router();

_.get("/registration",(req,res)=>{
    res.send("Hello From Routes")
});

module.exports = _;
