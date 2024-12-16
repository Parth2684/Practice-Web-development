const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
app.use(cors());

app.get("/getSimpleInterest",(req, res)=>{
    const p = parseInt(req.query.principle);
    const r = parseInt(req.query.interestRate);
    const n = parseInt(req.query.noOfYears);
    const simpleInterest = (p * r * n)/100;
    const amount = simpleInterest + p;
    res.json({
        "Interest": simpleInterest,
        "Total Amount": amount
    });
});

app.listen(port,()=>{
    console.log(`Your Server is listening on port: ${port}`);
})