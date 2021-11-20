const bcrypt  = require('bcrypt');


const salt = async() =>{
    
    const salted = await bcrypt.genSalt(10)
    console.log(salted);
};

salt();
