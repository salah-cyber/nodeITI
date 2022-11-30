const http = require('http');
const fs = require('fs');


let port = 3000;// اي سسرفر لازم يستمع على بورت 
const server = http.createServer((req,res)=>{ 
   
    if (req.url == '/') {
        res.write('<h1>this is the root page</h1>');
        res.end(); //localhot:3000
    }
    if (req.url == '/about') {
        res.write('<h1 style="color:blue;text-align:center;">Welcom to about page</h1>');
        res.end();//localhot:3000/about
    }
    if (req.url == '/home') {
        fs.readFile('home.html',(err,data)=>{
            if (err) {console.log('error occured');}
            else{
                res.write(data.toString());
                res.end();//localhot:3000/home
            }
        })
    }    
    if (req.url == '/style.css') {
        fs.readFile('style.css',(err,data)=>{
            if (err) {console.log('error occured in style.css');}
            else if(data){
                res.writeHead(200,{'content-type':'text/css'})
                res.write(data.toString());
                res.end();//localhot:3000/home
            }else{
                res.statusCode=404;
                //res.setHeader();
                res.end();
            }
        });
    }
    

     
}); //nodemon server    
server.listen(3000,()=>{console.log(`listening on port ${port}`);})




