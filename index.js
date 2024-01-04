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

    var counter=req.query.counter;

    var t=sum(counter);
    var u=Mul(counter);

    var ansObj={
        x:t,
        y:u,
    };

    res.status(200).send(ansObj);
}

app.get('/page1', handlerforPage1);

function getPage(req,res){
    res.send(`<head>
    <title>
        Hello from HTML
    </title>
</head>
<body>
    <b> This the body from the html file.</b>
</body>`)
}

app.get('/',getPage);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function sum(x){
    var s=0;
    for(var i=1;i<=x;i++){
        s+=i;
    }
    return s;
}
function Mul(x){
    var answer=1;
    for(var i=1;i<=x;i++){
        answer*=i;
    }
    return answer;
}

// var t=sum(100);

// console.log(t);