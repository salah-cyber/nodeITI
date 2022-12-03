const express = require('express');
const router = express.Router();

//--------------------------------------------------------------------------

const Ajv = require("ajv");
const ajv = new Ajv() 
const schema = {
    type: "object",
    properties: {
      name: {type: "string",'pattern':'^[A-Za-z]*$','maxLength':12,'minLength':2,},
      course: {type: "string",'enum':['english','physiology','cs','it']}
    },
    required: ["name",'course'],
    additionalProperties: false
  }
const validate = ajv.compile(schema);

//------------------------------------------------------------------------------validator 

const students = [
    {name:'sasa', course:'hesab',id:1},
    {name:'mona', course:'english',id:2},
    {name:'reda', course:'francais',id:3}
]

//------------------------------------------------------------------------------

router.use(express.json()); 

//------------------------------------------------------------------------------

router.all('/',(req,res,next) => {
    console.log('request recieved on student endpoint');
    next();
})

//------------------------------------------------------------------------------

router.get('/',(req,res)=>{
    res.set('access-control-Allow-Origin', '*'); 
    //res.json(students)
    res.render('students.ejs',{std:students});;
})

//------------------------------------------------------------------------------

router.param('id',(req,res,next,val)=>{
    if(Number(val)){
        req.id = val;
        next();
    }else{
        res.send('invalid id')
}})
//------------------------------------------------------------------------------

router.get('/:id',(req,res)=>{
    //let id = req.params.id;
    let id = req.id;
    console.log(req.id);
    console.log(req.params.id);
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

router.post('/',(req,res)=>{
    const valid = validate(req.body);
    if (valid) {
        req.body.id = students.length+1;
        students.push(req.body);
        res.json(students);
    } else {
        res.status(403).send('forbidden data, name should be string and course should be only it cs english physiology')
    }
})

//------------------------------------------------------------------------------new student

router.delete('/:id',(req,res)=>{
    let index = students.findIndex((val)=>{return val.id==req.params.id});
    if(index != -1){students.splice(index,1);}else{
        res.send('nO TTT foUnDD')
    }
    res.json(students);
    
})

//------------------------------------------------------------------------------

router.put('/:id',(req,res)=>{
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

module.exports = router;