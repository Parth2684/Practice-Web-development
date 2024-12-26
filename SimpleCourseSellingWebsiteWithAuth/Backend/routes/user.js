const { Router } = require("express");
const router = Router();
const { User, Course } = require("../db/db")
const jwt = require("jsonwebtoken");
const userMiddleware = require("../middlewares/user")

router.post("/signup", async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    try{
        await User.create({
        username,
        password
        })
        res.send("User Created Successfully")
    }catch(e){
        res.status(403).json({
            msg: "Some error Occured",
            error: e
        })
    }
})

router.post("/signin", async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    user = await User.find({
        username,
        password 
    })
    if(user){
        const token = jwt.sign({
            username
        }, process.env.JWT_SECRET);
        res.json({
            token
        })
    }else{
        res.json({
            msg: "User does not exist or Wrong inputs"
        })
    }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) =>{
    username = req.username;
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
router.get("/purchasedCourses", userMiddleware, async (req, res) =>{
    const user = await User.findOne({
        username
    });
    const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    })
    res.json({
        courses: courses
    })
})

router.get("/courses", userMiddleware, async (req, res) =>{
    const response = await Course.find({})
    res.json({
        Courses: response
    })
})

module.exports = router
