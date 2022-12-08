const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentControllerDB') //2))second thing after routes
const stdValidator = require("../middlewares/studentValidatorMW")
const autho = require("../middlewares/authoMWpermision")

router.use(express.json()); 




router.all('/',(req,res,next) => {console.log('request recieved on student endpoint');next();})




router.get('/' ,studentsController.getAllStudents);
router.get('/:id' ,studentsController.getStudentById)
router.post('/' ,stdValidator ,autho,studentsController.addNewStudent)
router.delete('/:id' ,autho,studentsController.deleteStudentById)
router.put('/:id' ,studentsController.updateStudent)




router.param('id',(req,res,next,val)=>{
    if((/^[0-9a-fA-F]{24}$/.test(val))){
        req.id = val;
        next();
    }else{
        res.status(400).send('invalid id')
}})
//------------------------------------------------------------------------------


module.exports = router;