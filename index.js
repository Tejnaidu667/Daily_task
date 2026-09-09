// let student={
//     name:"samay",
//     age:20, 
//     course:"MERN"
// }

// console.log(student);

require("fs").readFile("./abc.txt","utf-8",function(err,data){
    console.log(data);
});

require("fs").writeFileSync("abc.txt","hello world");