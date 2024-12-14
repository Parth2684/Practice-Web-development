const express = require("express");
const app = express();
const port = 3000;

function isOldEnoughMiddleware(req, res, next){
    const age = req.body.age;
    if(age >=14){
        next();
    }else{
        res.status(403).send("You are not old enough")
    }
}

function ticketCheckerMiddleware(req, res, next){
    const ticket = req.body.ticket;
    if(ticket == "free"){
        next();
    }else{
        res.status(403).send("Access Denied");
    }
}
app.use(express.json());
app.use(ticketCheckerMiddleware);
app.use(isOldEnoughMiddleware);
app.get("/ride1", (req, res)=>{
    res.send("You rode ride 1");
})
app.get("/ride2", (req, res)=>{
    res.send("You rode ride 2");
})
app.get("/ride3", (req, res)=>{
    res.send("You rode ride 3");
})

app.listen(port,()=>{
    console.log(`your ride is listening on port: ${port}`)
})