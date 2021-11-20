import { Router } from 'express';
import { AuthRouter } from '../AuthServices/api/index';

const router = Router();

router.use('/all', AuthRouter);

export const allRoutes = router;