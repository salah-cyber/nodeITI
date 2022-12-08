const validator = require("../util/authValidator")
module.exports = (req, res, next) => {
    let valid = validator(req.body) //boolean
    if (valid) {
        req.valid = 1
        next();
    }
    else {
        res.status(400).send("forbidden command... from userValidationMW")
    }
};