// routes/botanical-garden.routes.ts
import { Router } from 'express';
import { BotanicalGardenController } from '../controllers/botanical-garden.controller';

const router = Router();

// Basic CRUD
router.post('/', BotanicalGardenController.create);
router.get('/', BotanicalGardenController.findAll);
router.get('/:id', BotanicalGardenController.findOne);
router.get('/name/:name', BotanicalGardenController.findByName);
router.patch('/:id', BotanicalGardenController.update);
router.delete('/:id', BotanicalGardenController.delete);

// Plant management
router.post('/:gardenId/plants/:plantId', BotanicalGardenController.addPlant);
router.delete('/:gardenId/plants/:plantId', BotanicalGardenController.removePlant);

export default router;