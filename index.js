// const fs= require("fs");

// function callBackFn(err,data){
//     console.log(data);
// }

// fs.readFile("a.txt","utf-8",callBackFn);

// /npm node pckage manager

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

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