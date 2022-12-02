const express = require('express') 
const app = express();
const path = require('path');
const Ajv = require("ajv")
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
//------------------------------------------------------------------------------
const schema = {
    type: "object",
    properties: {
      name: {type: "string",'pattern':'^[A-Za-z]*$'},
      course: {type: "string",'maxLength':12,'minLength':2,'enum':['english','physiology','cs','it']}
    },
    required: ["name",'course'],
    additionalProperties: false
  }
  let validate = ajv.compile(schema);
//------------------------------------------------------------------------------
app.use(express.urlencoded({extended:true}))
app.use(express.json());
//------------------------------------------------------------------------------
const port = process.env.PORT||3000;
app.listen(port,()=>{console.log(`listening....!!! port ${port}`)}); 
//------------------------------------------------------------------------------
const students = [
    {name:'sasa', course:'hesab',id:2},
    {name:'mona', course:'english',id:4},
    {name:'reda', course:'francais',id:1}
]
//------------------------------------------------------------------------------
app.get('/api/students',(req,res)=>{
    res.set('access-control-Allow-Origin', '*'); 
    res.json(students)
})
//------------------------------------------------------------------------------
app.get('/api/students/:id',(req,res)=>{
    let id = req.params.id;
    let std =   students.find((val,index,arr)=>{ 
                 return val.id ==id
                })
    if (std) {
        res.json(std)
    }else{
        res.send('nOt FoUnD')
    }
})
//------------------------------------------------------------------------------
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/main.html')); 
})
//------------------------------------------------------------------------------
app.get('/welcome.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'/welcome.html'));
})
//------------------------------------------------------------------------------
app.post('/welcome.html',(req,res)=>{
    res.send(`thanks ${req.body.fnm} ${req.body.lnm} for send requirind data`);
})
//------------------------------------------------------------------------------
app.post('/api/students',(req,res)=>{
    const valid = validate(req.body);
    if (valid) {
        req.body.id = students.length+1;
        students.push(req.body);
        res.json(students);
    } else {
        res.status(403).send('forbidden data')
    }
})
//------------------------------------------------------------------------------
app.delete('/api/students/:id',(req,res)=>{
    let index = students.findIndex((val)=>{return val.id==req.params.id});
    if(index != -1){students.splice(index,1);}else{
        res.send('nO TTT foUnDD')
    }
    res.json(students);
    
})
//------------------------------------------------------------------------------
app.put('/api/students/:id',(req,res)=>{
    let index = students.findIndex((val)=>{return val.id==req.params.id});
    if(index != -1){
        for(i in req.body){
            students[index][i]=req.body[i];
        }
        res.json(students[index]);
    }else{
        res.send('student not found .. update not allowed')
    }
})
//------------------------------------------------------------------------------