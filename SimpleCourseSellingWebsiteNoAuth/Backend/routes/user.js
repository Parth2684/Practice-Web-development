const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middlewares/user");
const { User, Course } = require("../db/db")

router.post("/signup", (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username,
        password
    }).then((response)=>{
        res.json({
            msg: "Account Created"
        })
    }).catch(()=>{
        res.json({
            msg: "Account could't be created"
        })
    })
    
});

router.get("/courses", async (req, res)=>{
    const response = await Course.find({});
    res.json({"Courses": response})
});

router.post("/courses/:courseId", userMiddleware, async (req, res)=>{
    const username = req.headers.username;
    const courseId = req.params.courseId;
    await User.updateOne({
        username: username,
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        msg: "Purchase Successfull"
    })
});

router.get("/purchasedCourses", userMiddleware, async(req, res)=>{
    const user = await User.findOne({
        username: req.headers.username
    });
    const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    })
    res.json({
        courses: courses
    })
});

module.exports = router;