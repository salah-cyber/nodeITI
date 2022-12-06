const validator = require("../util/studentsValidator")



module.exports = (req,res,next) => {
    let valid =validator(req.body);
    if (valid) {
        req.valid=1; // if valid add property its name is valid to req object and give it value 1
        next();
    }else{
        res.status(403).send("forbidden command");
    }
};