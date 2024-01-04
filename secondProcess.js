function callBackFn(result){
    result.json().then((jsonBody)=>{
        console.log(jsonBody); 
    })
}

var sendObj={
    method:"GET"
};

fetch("http://localhost:3000/page1?counter=5",sendObj).then(callBackFn);