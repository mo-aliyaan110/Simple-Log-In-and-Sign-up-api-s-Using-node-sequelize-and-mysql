import { Router } from 'express';
import { Register } from '../controllers/signUp';
import { login } from '../controllers/Login';
const userSchema = require('../validations/registerSchema');
import validateDto from '../../../shared/middlewares/validate-dto';

const router = Router();


router.post('/register', validateDto(userSchema),  Register); 
    
router.post('/login', login);


export const AuthRouter = router;