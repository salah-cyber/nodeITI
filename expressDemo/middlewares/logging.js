// my custom middlware
// logging
module.exports = (req,res,next) => {
    console.log("logging ..");
    next();
};
//------------------------------------------------------------------------------