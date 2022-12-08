const jwt = require("jsonwebtoken");
const config = require("config")

module.exports = (req,res,next) => {
    //get x-auth-token header 
    const tokenFromHeader = req.header("x-auth-token");
    if(!tokenFromHeader) return res.status(401).send("access Denide.. from authoPermissionMW")
     try{
    const decodedPayload = jwt.verify(tokenFromHeader, config.get("jwtsec"))
    decodedPayload.adminRole
    
    //check user role (admin or not)
    if(!decodedPayload.adminRole) return res.status(401).send("Access Denied...");
    next();

}

catch(err){
    res.status(400).send("Invalid Token.. from authoPermissionMW")
}
    
};