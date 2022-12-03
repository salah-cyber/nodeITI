const Ajv = require("ajv");
const ajv = new Ajv() 
const schema = {
    type: "object",
    properties: {
      name: {type: "string",'pattern':'^[A-Za-z]*$','maxLength':12,'minLength':2,},
      course: {type: "string",'enum':['english','physiology','cs','it']}
    },
    required: ["name",'course'],
    additionalProperties: false
  }
module.exports = ajv.compile(schema);

//------------------------------------------------------------------------------validator 