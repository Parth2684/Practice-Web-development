const { Router } = require("express");
const adminMiddleware = require("../middlewares/admin");
const { Admin, Course } = require("../db/db")
const router = Router();

router.post("/signup", async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const response = await Admin.create({
        username,
        password
    })
    if(response){
        res.status(200).json({
            msg: "Admin Created Successfully"
        })
    }else{
        res.status(403).json({
            msg: "We ran into some problems Please Try again"
        })
    }
});

router.post("/courses", adminMiddleware, (req, res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price; 
    Course.create({
        title,
        description,
        imageLink,
        price
    }).then((response)=>{
        res.status(200).json({
            msg: "Course created Successfully",
            courseId: response._id
        })
    }).catch(()=>{
        res.status(403).json({
            msg: "There was some error and course couldn't be created"
        })
    })

});
router.get("/courses", adminMiddleware, async (req, res)=>{
    const response = await Course.find({});
    res.json({
        courses: response
    })
});

module.exports = router;