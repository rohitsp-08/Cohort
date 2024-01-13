const express = require("express");
const zod=require('zod');
const app = express();

app.use(express.json());

function middleware(req,res,next){
  console.log("middleware");
  next();  
}

app.post("/health_checkup",middleware,(req,res)=>{
  const kidneys= req.body.kidneys;
  const l=kidneys.length;

  res.send("you have "+l+" kidneys");
})

// global catches
app.use((err,req,res,next)=>{
  res.json({
    msg:"Sorry Something is up with the server",
  })
})

// app.get("/health_checkup", (req, res) => {
//   var kd = req.query.kId;
//   var uN = req.headers.username;
//   var pK = req.headers.password;

//   console.log(uN);
//   console.log(pK);

//   if (kd != 1 && kd != 2) {
//     res.status(411).json({
//       msg: "Invalid Input",
//     });
//     return;
//   }

//   if (uN != "rohit" || pK != "123") {
//     res.status(403).json({
//       " msg": "You are not authorized",
//     });
//     return;
//   }

  

//   res.status(200).json({
//     msg: "Healthy Kidney and Heart",
//   });
// });
app.listen(3000);
