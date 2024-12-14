const jwt = require('jsonwebtoken');
const z = require("zod");

const jwtPassword = 'secret';

const emailSchema = z.string().email();
const passwordSchema = z.string().min(6)

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }
    token = jwt.sign({username}, jwtPassword)
    return token
}

function verifyJwt(token) {
    try{
        jwt.verify(token, jwtPassword)
        return true;
    }catch(e){
        return false
    }
}

function decodeJwt(token) {
    const decoded = jwt.decode(token)
    if(decoded){
        return true;
    }else{
        return false;
    }
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};