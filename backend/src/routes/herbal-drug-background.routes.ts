// routes/herbal-drug-background.routes.ts
import { Router } from 'express';
import { HerbalDrugBackgroundController } from '../controllers/herbal-drug-background.controller';

const router = Router();

// Basic CRUD
router.post('/', HerbalDrugBackgroundController.create);
router.get('/', HerbalDrugBackgroundController.findAll);
router.get('/:id', HerbalDrugBackgroundController.findOne);
router.get('/plant/:plantName/pharmaceutical/:pharmaceuticalName', 
  HerbalDrugBackgroundController.findByPlantAndPharmaceutical);
router.patch('/:id', HerbalDrugBackgroundController.update);
router.delete('/:id', HerbalDrugBackgroundController.delete);

// Sourcing Background
router.post('/:id/sourcing-background', HerbalDrugBackgroundController.addSourcingBackground);

export default router;