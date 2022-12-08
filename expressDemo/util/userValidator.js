const Ajv = require("ajv");
const ajv = new Ajv() // instant of ajv class
const schema = { //this validation on request body (req.body) 
    type: "object",
    properties: {
        name: {
            type: "string",
            'pattern': '^[A-Z][a-z]*$'
        }, //begin with capital then small
        email: {
            type: "string",
            'pattern': '.+\@.+\..+'
        }, //email pattern 
        password: {
            type: "string"
        }
    },
    required: ["name", 'email', 'password'],
    //additionalProperties: false
}




module.exports = ajv.compile(schema);
// to use in route handler middleware as vaidator variable
