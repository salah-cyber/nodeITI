const validator = require('../util/studentsValidator')
const Student = require('../models/studentmodel');
//------------------------------------------------------------------------------

const getAllStudents = (req,res)=>{
    res.set('access-control-Allow-Origin', '*'); 
    Student.fetchAllStudents((obj)=>{
        res.render('students.ejs',{
            std:obj
        });
    })
}; 

const getStudentById = (req,res)=>{
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
}

const makeStudent = (req,res)=>{
    const valid = validator(req.body);
    if (valid) {
        let std = new Student(req.body.name,req.body.course);
        std.saveStudent();
        res.json(req.body);
    } else {
        res.status(403).send('forbidden data, name should be string and course should be only it cs english physiology')
    }
}

const deleteStudent = (req,res)=>{
    let index = students.findIndex((val)=>{return val.id==req.params.id});
    if(index != -1){students.splice(index,1);}else{
        res.send('nO TTT foUnDD')
    }
    res.json(students);
    
}

const updateStudent = (req,res)=>{
    let index = students.findIndex((val)=>{return val.id==req.params.id});
    if(index != -1){
        for(i in req.body){
            students[index][i]=req.body[i];
        }
        res.json(students[index]);
    }else{
        res.send('student not found .. update not allowed')
    }
}

module.exports = {getAllStudents,getStudentById,makeStudent,deleteStudent,updateStudent};