// var http = require("http");
// var fs = require("fs");
// http.createServer(function(request, response){
//     console.log("Hello From Function");
//     response.write("The Server Started \n");
//     fs.readFile("code.c", function(err, data){
//         response.write(data);
//         console.log("The File is read");
//         response.end();
//     });
//     //response.end("The Server Stopped Now");
// }).listen(300);

// console.log("Hello World");



// var express = require("express");
// var app = express();
// var fs = require("fs");
// var astGenerator = require("sqlite-parser");

// app.get("*", (req,res) => {
//     fs.readFile("code.sql", (err,query) =>{
//         if(!err){
//             var q= JSON.parse(query);
//             console.log(query);
//             var from;
//             for (var key in q.statement[0]){
//                 if (key == "from"){
//                     from = key;
//                 }
//             }
//             res.json(q.statement[0].variant + " " + q.statement[0].result[0].name + " "+ from + " " + q.statement[0].from.name);
//             //res.json()
//         }
//     });
// }).listen(3000);

// console.log("Server is running on port 3000");



// var express = require("express");
// var app = express();
// var fs = require("fs");
// var astGenerator = require("sqlite-parser");

// app.get("*", (req,res) => {
//     fs.readFile("code.sql", function(err,query){
//         if(!err){
//             var q= JSON.parse(query);
//             console.log(query);
//             var from;
//             for (var key in q.statement[0]){
//                 if (key == "from"){
//                     from = key;
//                 }
//             }
//             res.json(q.statement[0].variant + " " + q.statement[0].result[0].name + " "+ from + " " + q.statement[0].from.name + " " + q.statement[0].limit.variant + " " + q.statement[0].limit.start.value);
//             //res.json()
//         }
//     });
// }).listen(3000);

// console.log("Server is running on port 3000");



var express = require("express");
var app = express();
var fs = require("fs");
var astGenerator = require("sqlite-parser");

app.get("*", (req,res) => {
    fs.readFile("code.sql", (err,query) =>{
        if(!err){
            var q= JSON.parse(query);
            console.log(query);
            var from;
            var where;
            for (var key in q.statement[0]){
                if (key == "from"){
                    from = key;
                }
                if( key == "where"){
                    where = key;
                }
            }
            res.json(q.statement[0].variant + " " + q.statement[0].result[0].name + " "+ from + " " + q.statement[0].from.name + " " + where + " " + " " + q.statement[0].where[0].left.name +  q.statement[0].where[0].operation + " '" + q.statement[0].where[0].right.name+"'");
            //res.json()
        }
    });
}).listen(3000);

console.log("Server is running on port 3000");