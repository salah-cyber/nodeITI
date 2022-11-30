//global objects per module
//module
//exports = module.exports
//require
//__dirname
//__filename
//setTimeout(() => {}, timeout);
//clearTimeout
//setInterval
//clearInterval



//global object for all modules
//global

global.appCode = '123-node-app';
//console.log(module);
function sub(a,b) { return a-b};
module.exports={
    subFun:sub, //sub fun will be used/seen outside this module as subFun
    //sub:sub, = sub,    //will be seen as the same name
}//== module.exports.subfun=sub;
