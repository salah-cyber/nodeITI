//entry file
const express = require('express') // express is a web app framework
const app = express(); // express module is a fun that return app object 
const port = process.env.PORT||3000;
const students = [
    {name:'sasa', course:'hesab',id:2},
    {name:'mona', course:'english',id:4},
    {name:'reda', course:'francais',id:1}
]






app.listen(port,()=>{console.log(`listening....!!! port ${port}`)}); //nodemon app
//to force set port from cmd -> set PORT=7000   powershell -> $env:PORT=7000
app.get('/',(req,res)=>{
    console.log('reques recieved.....');
    res.send('u r at root page') // dont need res.end() because it executed implicitly
})

//sending json from api endpoint
//handling all students request
app.get('/api/students',(req,res)=>{
    res.json(students)
})

//handling A student request by id
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
