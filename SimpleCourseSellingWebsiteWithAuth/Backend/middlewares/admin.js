require("dotenv").config({path: "../.env"});
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_Secret;

function adminMiddleware(req, res, next){
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1]; 
    const decodedValue = jwt.verify(jwtToken, jwtSecret);
    if(decodedValue.username){
        next();
    }else{
        res.status(403).json({
            msg: "Authorization Error"
        })
    }
}

module.exports = adminMiddleware;