// to merge all routes
import { Router } from 'express';
import userRoutes from './user.routes';
import plantTaxonomyRoutes from './plant-taxonomy.routes';
import plantNomenclatureRoutes from './plant-nomenclature.routes';
import plantSynonymRoutes from './plant-synonym.routes';
import plantMorphologyRoutes from './plant-morphology.routes';
import plantEcologyDistributionRoutes from './plant-ecology-distribution.routes';
import plantConservationRoutes from './plant-conservation.routes';
import botanicalGardenRoutes from './botanical-garden.routes';
import ethnobotanyRoutes from './ethnobotany.routes';
import medicinalPropertiesRoutes from './medicinal-properties.routes';
import herbalDrugBackgroundRoutes from './herbal-drug-background.routes';
import sourcingBackgroundRoutes from './sourcing-background.routes';

const router = Router();

// API prefix for all routes (e.g., /api/v1/)
router.use('/api/v1/users', userRoutes);

// Add plant routes:
router.use('/api/v1/plant-taxonomies', plantTaxonomyRoutes);
router.use('/api/v1/plant-nomenclatures', plantNomenclatureRoutes);
router.use('/api/v1/plant-synonyms', plantSynonymRoutes);
router.use('/api/v1/plant-morphologies', plantMorphologyRoutes);
router.use('/api/v1/plant-ecology-distributions', plantEcologyDistributionRoutes);
router.use('/api/v1/plant-conservations', plantConservationRoutes);
router.use('/api/v1/botanical-gardens', botanicalGardenRoutes);
router.use('/api/v1/ethnobotanies', ethnobotanyRoutes);
router.use('/api/v1/medicinal-properties', medicinalPropertiesRoutes);
router.use('/api/v1/herbal-drug-backgrounds', herbalDrugBackgroundRoutes);
router.use('/api/v1/sourcing-backgrounds', sourcingBackgroundRoutes);

export default router;