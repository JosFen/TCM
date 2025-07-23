import { Router } from 'express';
import { UserController } from '../controllers/admin/user.controller';
// import { auth } from '../middleware/auth';

const router = Router();

// Apply auth middleware to all user routes
// router.use(auth);

// Admin User CRUD Routes
router.post('/register', UserController.create);
router.get('/', UserController.findAll);
router.get('/:id', UserController.findOne);
router.patch('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router;