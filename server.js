const express = require("express");
const app = express();
var server = require("http").Server(app);

app.get("/blah/hey",(req,res)=>{
    console.log("came");
    return res.send("Helloooooo")
})

server.listen(8080,()=>{
    console.log("server running.........");
})
