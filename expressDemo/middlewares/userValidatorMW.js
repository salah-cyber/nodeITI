const validator = require("../util/userValidator")
module.exports = (req,res,next) => {
    let valid = validator(req.body) //boolean
    if(valid){
        req.valid=1
        next();
    }
    else{
        res.status(400).send("forbidden command... from userValidationMW")
    }
    //next(); this make abig problem 
    //dont return two next() from same middlewatr 
};
//thsi MW take req.body and validate it by validator from util folder
//then it can be used in user endpoint router 