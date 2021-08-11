import { Router } from 'express';
import usersRoute from '../../domains/users/routes';

const router = Router();
router.use('/api/v1/users', usersRoute);

export default router;
