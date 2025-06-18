import { Router } from 'express';
import { UserController } from '../controllers/admin/user.controller';
// import { userAuth } from '../middleware/userAuth';

const router = Router();

// Apply auth middleware to all user routes
// router.use(userAuth);

// Admin User CRUD Routes
router.post('/register', UserController.create);
router.get('/', UserController.findAll);
router.get('/:id', UserController.findOne);
router.patch('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router;