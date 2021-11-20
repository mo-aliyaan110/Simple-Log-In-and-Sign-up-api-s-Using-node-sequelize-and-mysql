import { Request, Response } from 'express';
function validateDto (ajvValidate: any){
    return (req:Request,res: Response,next: any) => {
        const valid =  ajvValidate(req.body); 
        if(!valid){
             const errors = ajvValidate.errors;
             res.status(400).json(errors);
        }
        next();
    };
}
export default validateDto;