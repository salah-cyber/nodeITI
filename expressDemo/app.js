//entry file
const express = require('express') // express is a web app framework
const app = express(); // express module is a fun that return app object 
const path = require('path');


const port = process.env.PORT||3000;
const students = [
    {name:'sasa', course:'hesab',id:2},
    {name:'mona', course:'english',id:4},
    {name:'reda', course:'francais',id:1}
]



//passing data from client side to server side 
//1-url param   2-http requet body   3-query string ->?nm=x&age=10
//1
//sending json from api endpoint
//handling all students request
app.get('/api/students',(req,res)=>{
    res.json(students)
})
//handling A student request by id
// passing data from client to server via url parameter
app.get('/api/students/:id',(req,res)=>{
    let id = req.params.id; //i take id from url
    let std =   students.find((val,index,arr)=>{ //find array method 
                 return val.id ==id
                })
if (std) {
    res.json(std)
}else{
    res.send('nOt FoUnD')
}
})


//3-
//localhost:3000/
app.listen(port,()=>{console.log(`listening....!!! port ${port}`)}); 
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/main.html')); //contain form that ask to return welcome.html
})
//localhost:3000/welcome.html
app.get('/welcome.html',(req,res)=>{
    console.log(req.query);
    res.sendFile(path.join(__dirname,'/welcome.html'));
})
app.use(express.urlencoded({extended:true}))
app.post('/welcome.html',(req,res)=>{
    //console.log(req.query);
    res.send(`thanks ${req.body.fnm} ${req.body.lnm} for send requirind data`);
})