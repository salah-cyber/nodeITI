any route 

const expres = require("express");
const router = expres.Router();
const middleware1 = require("../MWfile1")
const middleware2 = require("../MWfile2")


router.METHOD("/",middleware1,middleware2,(req,res)=>{
    .....................
    .....................
    .....................
    .....................
    .....................
    .....................
    .....................
    .....................
})
module.exports = router;



if post -> need validate data -> util XXXXValidator.js





