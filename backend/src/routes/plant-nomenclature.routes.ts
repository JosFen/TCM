import { Router } from 'express';
import { PlantNomenclatureController } from '../controllers/plant-nomenclature.controller';
// import { userAuth } from '../middleware/userAuth';

const router = Router();

// router.use(userAuth);

// CRUD Routes
router.post('/', PlantNomenclatureController.create);
router.get('/', PlantNomenclatureController.findAll);
router.get('/:id', PlantNomenclatureController.findOne);
router.get('/scientific-name/:name', PlantNomenclatureController.findByScientificName);
router.patch('/:id', PlantNomenclatureController.update);
router.delete('/:id', PlantNomenclatureController.delete);

export default router;