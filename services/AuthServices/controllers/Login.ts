import User from '../../../shared/db/models/User';
import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';



export const login = async (req: Request, res: Response) => {
    let inputEmail = await req.body.email;
    let inputPassword = await req.body.password;
    let dbPwd = await bcrypt.hash(inputPassword, process.env.SALT);

    
    
    const userFound = await User.findOne({
        where: {
            email: inputEmail,
            password: dbPwd
        }
    });


    if(!userFound){
        res.send("User not registered, please register first")
    }
    else{
        const emailObj = {inputEmail}
        const JwtToken = jwt.sign(emailObj, process.env.SECRET_KEY)
        res.send(`Success, Token: ${JwtToken}`);
        
    }
    
}