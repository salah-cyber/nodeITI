const fs = require('node:fs');
const { callbackify } = require('node:util');
const path = require('path');
const studentsDataPath = path.join(path.dirname(process.mainModule.filename), 'data', 'students.json')
module.exports = class Student { //any class have a constructor
    constructor(name, course) {
        this.name = name;
        this.course = course;
    }

    saveStudent() {
        //students.push(this);
        fs.readFile(studentsDataPath, (err, data) => { //1)read from file
            let students = []; // i wil put in this array the data from json file
            if (!err) {
                students = JSON.parse(data)
                this.id = students.length + 1;
                students.push(this); // 2)update data -- this = new object that i want to save 
                fs.writeFile(studentsDataPath, //3)write into file 
                    JSON.stringify(students),
                    (err) => { console.log('err occured'); })
            }
        })

    }

    static fetchAllStudents(callback) {
        fs.readFile(studentsDataPath, (err, data) => {

            if (!err) {
                callback(JSON.parse(data))
            } else {
                callback ([]);
            }
        })
    }
}
