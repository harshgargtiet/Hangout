const http = require("http");
const express = require("express");
const cors=require("cors");
const socketIO = require("socket.io");

const port = 4500 ||process.env.PORT;


const app = express();

app.use(cors());
app.get("/",(req,res)=>{
    res.send("it working ");
})

const server = http.createServer(app);
const io= socketIO(server);

io.on("connection",()=>{
    console.log("New connection");
})

server.listen(port,()=>{
console.log(`server is working on http://localhost:${port}`);
})