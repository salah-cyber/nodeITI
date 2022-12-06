const mongoose = require('mongoose');
//..........................................................................................................................................................
//make schema for the document that will be stored in collection // schema built with validator
const studentSchema = new mongoose.Schema({   //types:String, Number, Date, Buffer, Biilean, Mixed, ObjectId, Array, Schema
    fn: {type:String,reqired:true,minlength:3,maxlength:50,trim:true}, //fields
    ln: {type:String,reqired:true,minlength:3,maxlength:50,trim:true},
    dept: {type:String,required:true,default:"SD"},
    id: {type:Number,required:true}, //unique:true
})
//..........................................................................................................................................................
//make collection(students) model(Student)
const Student = mongoose.model("students", studentSchema) // students collection in small letter
//............................................................................................................................





























module.exports = Student;