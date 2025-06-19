import { Router } from 'express';
import { PlantTaxonomyController } from '../controllers/plant-taxonomy.controller';
// import { userAuth } from '../middleware/userAuth';

const router = Router();

// Apply authentication middleware to all routes
// router.use(userAuth);

// CRUD Routes
router.post('/', PlantTaxonomyController.create);
router.get('/', PlantTaxonomyController.findAll);
router.get('/:id', PlantTaxonomyController.findOne);
router.patch('/:id', PlantTaxonomyController.update);
router.delete('/:id', PlantTaxonomyController.delete);

export default router;