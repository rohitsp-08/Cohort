// const fs= require("fs");

// function callBackFn(err,data){
//     console.log(data);
// }

// fs.readFile("a.txt","utf-8",callBackFn);

// /npm node pckage manager

const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

function middleware1(req,res,next){
    next();
}

app.use(bodyParser.json());

function handlerforPage1(req,res){
    // var counter=req.query.counter;
    // here we passed the variable through a query in the route

    // var counter=req.headers.counter;
    // here we passed the variable through headers

    var counter=req.body.counter;


    var ans=sum(counter);
    var t="The summation yields"+ ans;

    res.send(t);
}

app.post('/page1', handlerforPage1);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function sum(x){
    var s=0;
    for(var i=0;i<x;i++){
        s+=i;
    }
    return s;
}

var t=sum(100);

console.log(t);