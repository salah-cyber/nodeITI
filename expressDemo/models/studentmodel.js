
const students = [
    {name:'sasa', course:'hesab',id:1},
    {name:'mona', course:'english',id:2},
    {name:'reda', course:'francais',id:3},
    {name:'tasnim', course:'it',id:4},
    {name:'ramy', course:'cs',id:5}
]
module.exports = class Student { //any class have a constructor
                    constructor(name,course){
                        this.name = name;
                        this.course = course;
                        this.id = students.length+1
                    }

                    saveStudent(){
                        students.push(this);
                    }

                    static fetchAllStudents(){
                            return students;
                            }

                 }

