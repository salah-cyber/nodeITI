const expres = require("express");
const router = expres.Router();
const {User} = require("../models/userModelDB")
const auth = require("../middlewares/authoMWpermision")


//update role of a user
router.put("/:id",auth,(req, res)=>{
    User.findByIdAndUpdate({_id:req.params.id},{isAdmin:true},function(err,data){
        if(!err){
            if(data)
            res.status(200).send("خلاص ياعم المستخدم أبو الاي دي ده بقى ادمن ");
            else
            res.status(400).send("مفيش حد بالاي دي ده ")
        }
        else{
            res.status(500).send("الغلطة دي من عندنا معلش")

}}
    
    
    
    
)});







module.exports = router;
