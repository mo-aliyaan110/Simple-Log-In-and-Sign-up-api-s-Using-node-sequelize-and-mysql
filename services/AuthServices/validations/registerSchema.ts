import ajvInstance from '../../../shared/helpers/ajv-instance';
// creating a schema....
const schema = {
    type: 'object',
    properties:{
        email:{
            type:"string", format:"email"
        },
        password:{
            pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$",
            type:"string"
            
            
        },
        firstName:{
            type:"string"
        },
        lastName:{
            type:"string"
        },
        
        
    },
    required:['password', 'firstName', 'lastName', "email"],
    additionalProperties:false
};
module.exports = ajvInstance.compile(schema);
