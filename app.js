var express = require("express");
var app = express();
var fs = require("fs");
var http = require("http");
var sqliteParser = require("sqlite-parser");

app.get("*", (req,res) => {
    fs.readFile("query.sql","utf-8",(err,query) => {
        if(!err){
            sqliteParser(query, (err,ast) => {
                var q = (ast);
                var temp = q.statement[0].variant;
                var result = temp.toUpperCase();
                result += " ";
                temp = q.statement[0].result[0].name;
                result += temp.toUpperCase();
                for (var key in q.statement[0]){
                    if(key == "from"){
                        temp = key;
                    }
                }
                result += " "+temp.toUpperCase();
                result += " "+q.statement[0].from.name.toUpperCase();
                res.send(result);
            });
        }
    });
}).listen(3000);