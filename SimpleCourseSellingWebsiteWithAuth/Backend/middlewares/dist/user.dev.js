"use strict";

require("dotenv").config({
  path: "../.env"
});

var jwt = require("jsonwebtoken");

var jwtSecret = process.env.JWT_SECRET;

function userMiddleware(req, res, next) {
  var token = req.headers.authorization;
  var words = token.split(" ");
  var jwtToken = words[1];
  var decodedValue = jwt.verify(jwtToken, jwtSecret);

  if (decodedValue.username) {
    req.username = decodedValue.username;
    next();
  } else {
    res.status(403).json({
      msg: "Authorization Error"
    });
  }
}

module.exports = userMiddleware;