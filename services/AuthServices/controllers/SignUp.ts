import { Request, Response } from 'express';
import User from '../../../shared/db/models/User';
import * as bcrypt from 'bcrypt';



export const Register = async( req: Request, res: Response ) => {
    
    const hashedPwd = await bcrypt.hash(req.body.password, process.env.SALT);
    
    let UserData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPwd
    };

    await User.create(UserData);
    res.send("Registration Successful!")
    
}