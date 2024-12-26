const { Router } = require("express");
const jwt = require("jsonwebtoken")
const router = Router();
const { Admin, Course } = require("../db/db");
const adminMiddleware = require("../middlewares/admin")

router.post("/signup", async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    try{
        await Admin.create({
            username,
            password
        });
        res.json({
            msg: "Admin Created Successfully"
        })
    }catch(e){
        res.json({
            msg: "Account Not Created",
            error: e.message
        })
    }    
})

router.post("/signin", async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const user = await Admin.find({
        username,
        password
    })
    if(user){
        const token = jwt.sign({
            username
        },process.env.JWT_SECRET);
        res.json({
            token
        })
    }else{
        res.json({
            msg: "Wrong Inputs"
        })
    }
})

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