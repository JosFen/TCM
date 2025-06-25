// to merge all routes
import { Router } from 'express';
import userRoutes from './user.routes';
import plantTaxonomyRoutes from './plant-taxonomy.routes';
import plantNomenclatureRoutes from './plant-nomenclature.routes';
import plantSynonymRoutes from './plant-synonym.routes';
import plantMorphologyRoutes from './plant-morphology.routes';

const router = Router();

// API prefix for all routes (e.g., /api/v1/)
router.use('/api/v1/users', userRoutes);

// Add plant routes:
router.use('/api/v1/plant-taxonomies', plantTaxonomyRoutes);
router.use('/api/v1/plant-nomenclatures', plantNomenclatureRoutes);
router.use('/api/v1/plant-synonyms', plantSynonymRoutes);
router.use('/api/v1/plant-morphologies', plantMorphologyRoutes);

export default router;