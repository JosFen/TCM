// to merge all routes
import { Router } from 'express';
import userRoutes from './user.routes';

const router = Router();

// API prefix for all routes (e.g., /api/v1/users)
router.use('/api/v1/users', userRoutes);

// Add other routes here later...
// router.use('/api/v1/plants', plantRoutes);

export default router;