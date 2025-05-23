const { User } = require("../db/db");
function userMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;
    User.findOne({
        username: username,
        password: password
    })
    .then((value)=>{
        if(value){
            next();
        }else{
            res.status(403).json({
                msg: "User Doesn't Exist"
            })
        }
    })
}
module.exports = userMiddleware;