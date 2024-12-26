const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user")


app.use(bodyParser.json())

app.use("/admin", adminRouter)
app.use("/user", userRouter)
app.listen(port, ()=>{
    console.log(`Your App is listening on ${port}`)
})