const http = require('http');
const fs = require('fs');
const { json } = require('stream/consumers');
const Students = [
    {name: 'Ali', dept: 'PD', id:1},
    {name: 'Nour', dept: 'SA', id:1},
    {name: 'Mona', dept: 'MD', id:1},
    {name: 'Sara', dept: 'SAP', id:1},
    {name: 'Mostafa', dept: 'EB', id:1},
    {name: 'Ahmed', dept: 'GD', id:1},
    {name: 'Noha', dept: 'GA', id:1},
];



const port = 3000;
const server = http.createServer((req,res)=>{ 
   
    switch (req.url) {
        case '/':{
            res.write('<h1>this is the root page</h1>');
            res.end();
        }
        break;   
        case '/about':{
            res.write('<h1 style="color:blue;text-align:center;">Welcom to about page</h1>');
            res.end();
        }
        break;   
        case '/home':{
            fs.readFile('home.html',(err,data)=>{
                if (err) {console.log('error occured');}
                else{
                    res.write(data.toString());
                    res.end();
                }
            })
        }
        break;   
        case '/style.css':{
            fs.readFile('style.css',(err,data)=>{
                if (err) {console.log('error occured in style.css');}
                else {
                    res.writeHead(200,{'content-type':'text/css'})
                    res.write(data.toString());
                    res.end();
                }
            });
        }
        break; 
        case '/api/students':{
            res.writeHead(200,{'content-type':'application/json'})
            res.write(JSON.stringify(Students));// stringify java obj to json
            res.end(); 
        }
        break;
        default:
            res.write('<h1 style="color:blue;text-align:center;">goodbye</h1>');
            res.end();
        }
          
    }
  


     
); //nodemon server    
server.listen(3000,()=>{console.log(`listening on port ${port}`);})




