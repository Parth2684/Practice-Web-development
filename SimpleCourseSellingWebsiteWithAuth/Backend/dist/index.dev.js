"use strict";

var express = require("express");

var app = express();

var bodyParser = require("body-parser");

var port = 3000;

var adminRouter = require("./routes/admin");

var userRouter = require("./routes/user");

app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.listen(port, function () {
  console.log("Your App is listening on ".concat(port));
});