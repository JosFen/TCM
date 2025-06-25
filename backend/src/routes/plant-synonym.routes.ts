import { Router } from 'express';
import { PlantSynonymController } from '../controllers/plant-synonym.controller';
// import { userAuth } from '../middleware/userAuth';

const router = Router();

// Apply authentication middleware to all routes
// router.use(userAuth);

// CRUD Routes
router.post('/', PlantSynonymController.create);
router.get('/', PlantSynonymController.findAll);
router.get('/plant/:plantId', PlantSynonymController.findByPlantId);
router.get('/:id', PlantSynonymController.findOne);
router.patch('/:id', PlantSynonymController.update);
router.delete('/:id', PlantSynonymController.delete);

export default router;