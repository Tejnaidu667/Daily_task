// let student={
//     name:"samay",
//     age:20, 
//     course:"MERN"
// }

// console.log(student);

// require("fs").readFile("./abc.txt","utf-8",function(err,data){
//     console.log(data);
// });

// require("fs").writeFileSync("abc.txt","hello world");

//const http =require("http");

//creating a server

//we take port number 8000 and our local server number is 127.0.0.1
// http
// .createServer((req,res)=>{
//         console.log("request has been made from browser to server");

//         res.end("hello from the server");
// })
// .listen(8000)


// http
// .createServer((req,res)=>{
//         console.log(req.url);
//         //console.log(req.method);

//         //res.end("hello from the server");
//         if(req.url=="/add"){
//                 console.log("add page");
//         }else if(req.url=="/update"){
//                 console.log("update page");
//         }else if(req.url=="/delete"){
//                 console.log("delete page");
//         }
// })
// .listen(4000)

const http = require("http");

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/students") {
        res.end("GET: Student data");
    }

    else if (req.method === "POST" && req.url === "/students") {
        res.end("POST: Student created");
    }

    else {
        res.end("Route not found");
    }

});

server.listen(4000, () => {
    console.log("Server running on port 4000");
});
