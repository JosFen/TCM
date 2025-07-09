// routes/sourcing-background.routes.ts
import { Router } from 'express';
import { SourcingBackgroundController } from '../controllers/sourcing-background.controller';

const router = Router();

// CRUD Routes
router.post('/', SourcingBackgroundController.create);
router.get('/', SourcingBackgroundController.findAll);
router.get('/:id', SourcingBackgroundController.findOne);
router.get('/herbal-drug/:herbalDrugId', SourcingBackgroundController.findByHerbalDrugId);
router.patch('/:id', SourcingBackgroundController.update);
router.delete('/:id', SourcingBackgroundController.delete);

export default router;