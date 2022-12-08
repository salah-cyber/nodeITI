// need to validate name and pass only
const Ajv = require("ajv");
const ajv = new Ajv() // instant of ajv class
const schema = { //this validation on request body (req.body) 
    type: "object",
    properties: {
        email: {
            type: "string",
            'pattern': '.+\@.+\..+'
        }, //email pattern 
        password: {
            type: "string"
        }
    },
    required: ['email', 'password'],
    //additionalProperties: false
}




module.exports = ajv.compile(schema);
// to use in route handler middleware as vaidator variable
