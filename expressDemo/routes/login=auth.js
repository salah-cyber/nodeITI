const expres = require("express");
const router = expres.Router();
const validator = require("../middlewares/authValidatorMW")
const { User } = require("../models/userModelDB") // i need it in if user found 
const bcrypt = require("bcrypt");

router.post("/", validator, async (req, res) => {

    try{
    //check email
    //User.findOne({email:req.body.email}) // this fun return ptomise
    let user = await User.findOne({ email: req.body.email }).exec();
    if (!user) return res.status(400).send("invalid email or password.. hh , eamil i mean ")
    // i use return to skip what comming
    //check password
    let validPswrd = await bcrypt.compare(req.body.password, user.password)
    if (!validPswrd) return res.status(400).send("invalid email or password.. hh , pass i mean ")


    //const token = jwt.sign({userid:user._id},"thisissecretkeyfortokengeneration") 
    const token = user.genAuthToken(); 
    //powershell $jwtsecvar = "thisissecretkeyfortokengeneration"
    //cmd -> set jwtsecvar = thisissecretkeyfortokengeneration shold be in cmd that run nodemon /app.js -- then set j to see all vars that begin with j
    //send res
    //res.status(200).send("ok user present with that pas in db");
    res.header("x-auth-token",token)
    //console.log(token);
    //console.log(config.get("jwtsecvar"));
    res.status(200).send("لقد تم الدخول بنجاح");
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MzkwYzVkOGQxNTg4OTg5Yjc2MTYzOTEiLCJpYXQiOjE2NzA0MzIyNjd9.g34XjTAFxE2o-ofRoLFRzQDd4_8zpS8v5X5FIKDgLNg
    //take token and debug it in jwt.io website   
    // we use web token to identify the user 
    // x-header because it is acustom header واخدين على كده 
    }catch{
        for (let e in err.errors){
            console.log(err.errors[e].message);
            res.status(400).send("طلب سي ء");
        }
    }
})

module.exports = router;


//iat in jwt.io debugger is the time that token was generated 
// ممكن يكون اتنين توكن مختلفين ولكن نفس البايلود والاختلاف بيبقى في الوقت اللي اتعمل فيه لتوكن 
