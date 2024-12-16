const express = require("express");
const cors = require("cors");
const port = 3000;
const app = express();

app.use(cors());

app.get("/getsum", (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());
})
app.listen(port,()=>{
    console.log(`Backend is running on port: ${port}`);
});