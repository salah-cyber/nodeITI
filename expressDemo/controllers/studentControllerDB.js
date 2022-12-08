const Student = require("../models/studentModelDB");
// implementaion to all possible fun that i need to execute crud operation on Student collection that in db 



//getAllStudents
let getAllStudents = async (req, res, next) => {
    try { //await statement not have catch so i wrap it in try catch statement
        let std = await Student.find().select({
            fn: 1,
            ln: 1,
            id: 1
        }).sort({
            id: 1
        });
        res.send(std);  
    }
    catch (err) {
        //for (let e in err.errors) { console.log(err.errors[e].message); }
        //res.status(400).send('Bad Request .. some fields are missed ')
        next(err)
    }
}



//getStudentByID
// if our fun return promise we can get data by using then or make funtion async and use await to get data and store it in a var     
let getStudentById = async (req, res, next) => {
    try { //await statement not have catch so i wrap it in try catch statement
        let std = await Student.findById(req.params.id);
        if (!std) return res.status(404).send("Student with the given id is not found ")
        res.send(std);
    }
    catch (err) {
        next(err)
    }
}



//add student
let addNewStudent = (req, res, next) => {
    let std = new Student({ //Student is a class
        fn: req.body.fn,
        ln: req.body.ln,
        dept: req.body.dept,
        id: req.body.id
    })
    std.save()
        .then(() => { res.send(std) }) // i not put status(200) because it is the default      
        .catch((err) => {
            next(err)
        })
}




//updateStudent
let updateStudent = async (req, res, next) => {
    try {
        let std = await Student.findOneAndUpdate(req.params.id, req.body, {
            returnOriginal: false
        });
        if (!std) return req.status(404).send("Student with the given id is not found ")
        res.send(std);
    }
    catch (err) {
        next(err);
    }
}



//deletStudent
let deleteStudentById = async (req, res, next) => {
    try {
        let std = await Student.findByIdAndRemove(req.params.id);
        if (!std) return req.status(404).send("Student with the given id is not found ")
        res.send(std);
    }
    catch (err) {
        next(err)
    }
}



module.exports = {
    addNewStudent,
    getStudentById,
    getAllStudents,
    updateStudent,
    deleteStudentById
}






