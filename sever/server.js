const http =require("http");

//creating a server

//we take port number 8000 and our local server number is 127.0.0.1
http
.createServer((req,res)=>{
        console.log("request has been made from browser to server");
})
.listen(8000)