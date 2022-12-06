const Ajv = require("ajv");
const ajv = new Ajv() 
const schema = { //this validation on request body (req.body) 
    type: "object",
    properties: {
      fn: {type: "string",'pattern':'^[A-Za-z]*$'},
      ln: {type: "string",'pattern':'^[A-Za-z]*$'},
      dept: {type: "string",'enum':['SD','SA','MD']}
    },
    required: ["fn",'ln'],
    //additionalProperties: false
  }




module.exports = ajv.compile(schema);

//-----------------------------------------validator 