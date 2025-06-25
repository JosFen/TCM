import { Router } from 'express';
import { PlantMorphologyController } from '../controllers/plant-morphology.controller';
// import { userAuth } from '../middleware/userAuth';

const router = Router();

// router.use(userAuth);

router.post('/', PlantMorphologyController.create);
router.get('/', PlantMorphologyController.findAll);
router.get('/plant/:plantId', PlantMorphologyController.findByPlantId);
router.get('/:id', PlantMorphologyController.findOne);
router.patch('/:id', PlantMorphologyController.update);
router.delete('/:id', PlantMorphologyController.delete);

export default router;