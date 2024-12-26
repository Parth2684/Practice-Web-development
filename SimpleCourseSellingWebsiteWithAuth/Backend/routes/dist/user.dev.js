"use strict";

var _require = require("express"),
    Router = _require.Router;

var router = Router();

var _require2 = require("../db/db"),
    User = _require2.User,
    Course = _require2.Course;

var jwt = require("jsonwebtoken");

var userMiddleware = require("../middlewares/user");

router.post("/signup", function _callee(req, res) {
  var username, password;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          username = req.body.username;
          password = req.body.password;
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(User.create({
            username: username,
            password: password
          }));

        case 5:
          res.send("User Created Successfully");
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](2);
          res.status(403).json({
            msg: "Some error Occured",
            error: _context.t0
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 8]]);
});
router.post("/signin", function _callee2(req, res) {
  var username, password, token;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          username = req.body.username;
          password = req.body.password;
          _context2.next = 4;
          return regeneratorRuntime.awrap(User.find({
            username: username,
            password: password
          }));

        case 4:
          user = _context2.sent;

          if (user) {
            token = jwt.sign({
              username: username
            }, process.env.JWT_SECRET);
            res.json({
              token: token
            });
          } else {
            res.json({
              msg: "User does not exist or Wrong inputs"
            });
          }

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.post("/courses/:courseId", userMiddleware, function _callee3(req, res) {
  var courseId;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          username = req.username;
          courseId = req.params.courseId;
          _context3.next = 4;
          return regeneratorRuntime.awrap(User.updateOne({
            username: username
          }, {
            "$push": {
              purchasedCourses: courseId
            }
          }));

        case 4:
          res.json({
            msg: "Purchase Successfull"
          });

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router.get("/purchasedCourses", userMiddleware, function _callee4(req, res) {
  var user, courses;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(User.findOne({
            username: username
          }));

        case 2:
          user = _context4.sent;
          _context4.next = 5;
          return regeneratorRuntime.awrap(Course.find({
            _id: {
              "$in": user.purchasedCourses
            }
          }));

        case 5:
          courses = _context4.sent;
          res.json({
            courses: courses
          });

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
});
router.get("/courses", userMiddleware, function _callee5(req, res) {
  var response;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(Course.find({}));

        case 2:
          response = _context5.sent;
          res.json({
            Courses: response
          });

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
});
module.exports = router;