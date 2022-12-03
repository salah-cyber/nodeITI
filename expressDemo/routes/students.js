const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController')
//--------------------------------------------------------------------------
router.use(express.json()); 
//------------------------------------------------------------------------------
router.all('/',(req,res,next) => {
    console.log('request recieved on student endpoint');
    next();
})
//------------------------------------------------------------------------------
router.get('/',studentsController.getAllStudents);
//------------------------------------------------------------------------------
router.get('/:id',studentsController.getStudentById)
//------------------------------------------------------------------------------
router.post('/',studentsController.makeStudent)
//------------------------------------------------------------------------------new student
router.delete('/:id',studentsController.deleteStudent)
//------------------------------------------------------------------------------
router.put('/:id',studentsController.updateStudent)
//------------------------------------------------------------------------------
router.param('id',(req,res,next,val)=>{
    if(Number(val)){
        req.id = val;
        next();
    }else{
        res.send('invalid id')
}})
//------------------------------------------------------------------------------


module.exports = router;