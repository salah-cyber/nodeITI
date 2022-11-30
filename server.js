//http module
const http = require('http');
const server = http.createServer(); //انشاء كائن سرفر
let port = 3000;// اي سسرفر لازم يستمع على بورت 
server.listen(3000,()=>{console.log(`listening on port ${port}`);})

server.on('request',(req,res)=>{ //server listen on request event ياسرفر لما يجيلك طلب اعمل كذا
    console.log('request recieved');
    console.log(req.url);
    console.log(req.method);

    res.write('hahaha this a 505 page');
    res.end(); //dont foret end requet
}) // url:localhost:3000



// const server = http.createServer((req,res)=>{ 
//     console.log('request recieved');
//     console.log(req.url);
//     console.log(req.method);

//     res.write('hahaha this a 404 page');
//     res.end(); 
// }); 
// server.listen(3000,()=>{console.log(`listening on port 3000`);})



//install nodemon
//npm install -g nodemon
//nodemon server.js
//nodemon is like live server for javaScript
//powershell -> Set-ExecutionPolicy RemoteSigned
