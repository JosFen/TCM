// routes/plant-ecology-distribution.routes.ts
import { Router } from 'express';
import { PlantEcologyDistributionController } from '../controllers/plant-ecology-distribution.controller';
// import { userAuth } from '../middleware/userAuth';

const router = Router();

// router.use(userAuth);

// CRUD Routes
router.post('/', PlantEcologyDistributionController.create);
router.get('/', PlantEcologyDistributionController.findAll);
router.get('/:id', PlantEcologyDistributionController.findOne);
router.get('/plant/:plantId', PlantEcologyDistributionController.findByPlantId);
router.patch('/:id', PlantEcologyDistributionController.update);
router.delete('/:id', PlantEcologyDistributionController.delete);

export default router;