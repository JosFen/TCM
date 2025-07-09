// routes/medicinal-properties.routes.ts
import { Router } from 'express';
import { MedicinalPropertiesController } from '../controllers/medicinal-properties.controller';

const router = Router();

// Basic CRUD
router.post('/', MedicinalPropertiesController.create);
router.get('/', MedicinalPropertiesController.findAll);
router.get('/:id', MedicinalPropertiesController.findOne);
router.get('/name/:name', MedicinalPropertiesController.findByPharmaceuticalName);
router.patch('/:id', MedicinalPropertiesController.update);
router.delete('/:id', MedicinalPropertiesController.delete);

// Herbal Drug management
router.post('/:medicinalPropertyId/herbal-drugs/:herbalDrugId', MedicinalPropertiesController.addHerbalDrug);
router.delete('/:medicinalPropertyId/herbal-drugs/:herbalDrugId', MedicinalPropertiesController.removeHerbalDrug);

export default router;