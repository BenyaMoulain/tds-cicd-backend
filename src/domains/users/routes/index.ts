import { Router } from 'express';
import asyncHandler from '../../../infrastructure/common/handlers/asyncHandler';
import UserController from '../controllers';

const userController = new UserController();
const router = Router();

router.post('/', asyncHandler(userController.save));
router.get('/', asyncHandler(userController.list));
router.delete('/:id', asyncHandler(userController.remove));
router.put('/:id', asyncHandler(userController.update));

export default router;
