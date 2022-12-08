const express = require('express');
const router = express.Router(); //router is obj
const validator = require("../middlewares/userValidatorMW")
const { User } = require("../models/userModelDB")
const bcrypt = require("bcrypt"); //hash passwords 
//registation route handler = (add user in db = post)

// بدام الداتا جاية من برة وهخزنها يبقى لازم اتاكد انها صح و مش مضرة 
//util folder for making validation schema
//middlewares folder for make validation 
//call user making validation in user router
//1 - check if the user already exists


router.post("/", validator, async (req, res) => {
    try {
        console.log(".................1");
        let user = await User.findOne({email: req.body.email});
        if (user) {return res.status(400).send("User already Rgistered!");};
        //2 - make nw user to add to DB
        let salt = await bcrypt.genSalt(10);
        let hashedPswd = await bcrypt.hash(req.body.password, salt);
        user = new User({
            email:req.body.email,
            name:req.body.name,
            password:hashedPswd
        });
        await user.save();
        const token = user.genAuthToken; //  in user model 
        res.header("x-auth-token",token)
        res.send("OK u are registered successfully");
    }catch (err) {
        for (let e in err.errors) { console.log(err.errors[e].message); }
        res.status(400).send('Bad Request .. some fields are missed ')
    }
    
})





// router.post("/", validator, (req, res) => {
//     //let user =  User.findOne({email: req.body.email});
//     //let salt =  bcrypt.genSalt(10);
//     //let hashedPswd =  bcrypt.hash(req.body.password, salt);
//     let user = new User({
//         email:req.body.email,
//         name:req.body.name,
//         password:req.body.password
//     });
//     user.save()
//     .then(() => { res.send(std) })
//     .catch((err) => {
//         for (let e in err.errors) { console.log(err.errors[e].message); }
//         res.status(400) // i we not put 400 the default is 200
//     })
// })

//any promise need then if promise fullfilled and catch if promise failed 










module.exports = router;