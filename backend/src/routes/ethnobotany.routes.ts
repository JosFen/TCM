// routes/ethnobotany.routes.ts
import { Router } from 'express';
import { EthnobotanyController } from '../controllers/ethnobotany.controller';

const router = Router();

// CRUD Routes
router.post('/', EthnobotanyController.create);
router.get('/', EthnobotanyController.findAll);
router.get('/:id', EthnobotanyController.findOne);
router.get('/plant/:plantId', EthnobotanyController.findByPlantId);
router.patch('/:id', EthnobotanyController.update);
router.delete('/:id', EthnobotanyController.delete);

export default router;