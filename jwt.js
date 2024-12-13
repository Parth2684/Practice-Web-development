const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "parth12345678";
const app = express();
app.use(express.json());

const allUsers = [
    {
        username: "parth@gmail.com",
        password: "12345678",
        name: "parth"
    },
    {
        username: "damn@gmail.com",
        password: "damnbro",
        name: "kendrick"
    },
    {
        username: "mmlp@gmail.com",
        password: "nahitsslim",
        name: "marshall"
    }
];

function userExists(username, password){
    let userExists = false;
    for(i=0; i<allUsers.length; i++){
        if(allUsers[i].username == username && allUsers[i].password == password){
            userExists = true;
        }
    }
    return userExists; 
}
app.post("/signin", (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    if(!userExists(username, password)){
        return res.status(403).json({
            msg: "User does not exists"
        });
    }
    var token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token
    });
});

app.get("/users", (req, res)=>{
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        let printList = [];
        for(i=0; i<allUsers.length; i++){
            if(allUsers[i].username != username){
                printList.push(allUsers[i]);
            }
        }
        res.json(printList);
    }catch(err){
        res.status(403).json({
            msg:"Invalid token"
        });
    }
});
app.listen(3000);