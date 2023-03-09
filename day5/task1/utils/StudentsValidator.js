const Ajv = require("ajv");
const ajv = new Ajv();

const StudentsSchema = {
    type:"object",
    properties:{
        name:{type:"string",pattern:"^[a-zA-Z]+$"},
        age:{type:"number", minimum:15,maximum:50},
        dept:{type:"string", enum:["SD","UI","SWA"], minLength:2, maxLength:3}
    },
    required:["name", "age","dept"],
    additionalProperties:false
    // minProperties:2,
    // maxProperties:2
}
module.exports = ajv.compile(StudentsSchema);