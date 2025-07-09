// routes/plant-conservation.routes.ts
import { Router } from 'express';
import { PlantConservationController } from '../controllers/plant-conservation.controller';

const router = Router();

router.post('/', PlantConservationController.create);
router.get('/', PlantConservationController.findAll);
router.get('/:id', PlantConservationController.findOne);
router.get('/plant/:plantId', PlantConservationController.findByPlantId);
router.patch('/:id', PlantConservationController.update);
router.delete('/:id', PlantConservationController.delete);

export default router;