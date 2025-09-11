// // to merge all routes
// import { NextFunction, Router, Response } from 'express';
// import authRoutes from './auth.routes';
// import userRoutes from './user.routes';
// import plantTaxonomyRoutes from './plant-taxonomy.routes';
// import plantNomenclatureRoutes from './plant-nomenclature.routes';
// import plantSynonymRoutes from './plant-synonym.routes';
// import plantMorphologyRoutes from './plant-morphology.routes';
// import plantEcologyDistributionRoutes from './plant-ecology-distribution.routes';
// import plantConservationRoutes from './plant-conservation.routes';
// import botanicalGardenRoutes from './botanical-garden.routes';
// import ethnobotanyRoutes from './ethnobotany.routes';
// import medicinalPropertiesRoutes from './medicinal-properties.routes';
// import herbalDrugBackgroundRoutes from './herbal-drug-background.routes';
// import sourcingBackgroundRoutes from './sourcing-background.routes';

// import { AuthenticatedRequest, authenticateJWT, authorizeAdmin, authorizeReadOnly } from '../middleware/auth';

// const router = Router();


// // API prefix for all routes (e.g., /api/v1/)

// // Add user authentication routes:
// router.use('/api/v1/auth', authRoutes);
// // Add admin user routes:
// router.use('/api/v1/users', authenticateJWT, authorizeAdmin, userRoutes);

// const protectedRouteHandler = [
//     authenticateJWT,
//     (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
//         if (req.user?.role === 'ADMIN') {
//             next();
//         } else {
//             authorizeReadOnly(req, res, next);
//         }
//     }
// ];

// // Add plant routes:
// // Protected routes with role-based access
// router.use('/api/v1/plant-taxonomies', ...protectedRouteHandler, plantTaxonomyRoutes);

// router.use('/api/v1/plant-nomenclatures', ...protectedRouteHandler, plantNomenclatureRoutes);

// router.use('/api/v1/plant-synonyms', ...protectedRouteHandler, plantSynonymRoutes);

// router.use('/api/v1/plant-morphologies', ...protectedRouteHandler, plantMorphologyRoutes);

// router.use('/api/v1/plant-ecology-distributions', ...protectedRouteHandler, plantEcologyDistributionRoutes);

// router.use('/api/v1/plant-conservations', ...protectedRouteHandler, plantConservationRoutes);

// router.use('/api/v1/botanical-gardens', ...protectedRouteHandler, botanicalGardenRoutes);
// router.use('/api/v1/ethnobotanies', ...protectedRouteHandler, ethnobotanyRoutes);
// router.use('/api/v1/medicinal-properties', ...protectedRouteHandler, medicinalPropertiesRoutes);
// router.use('/api/v1/herbal-drug-backgrounds', ...protectedRouteHandler, herbalDrugBackgroundRoutes);
// router.use('/api/v1/sourcing-backgrounds', ...protectedRouteHandler, sourcingBackgroundRoutes);

// export default router;

// to merge all routes
import { NextFunction, Router, Response, RequestHandler } from 'express';
import authRoutes from './auth.routes';
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

import {
  AuthenticatedRequest,
  authenticateJWT,
  authorizeAdmin,
  authorizeReadOnly,
} from '../middleware/auth';

const router = Router();

// ---------- Helpers ----------
const isReadMethod = (m: string) => m === 'GET' || m === 'HEAD' || m === 'OPTIONS';

/**
 * Public for reads; writes require ADMIN.
 * - GET/HEAD/OPTIONS: no auth required
 * - other methods: authenticate + admin
 */
const publicReadProtectedWrite: RequestHandler = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  if (isReadMethod(req.method)) return next();
  return authenticateJWT(req, res, () => authorizeAdmin(req, res, next));
};

// (kept for other areas where you still want logged-in READ-only)
const protectedRouteHandler = [
  authenticateJWT,
  (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (req.user?.role === 'ADMIN') {
      next();
    } else {
      authorizeReadOnly(req, res, next);
    }
  },
];

// ---------- Routes with prefix /api/v1 ----------

// Auth
router.use('/api/v1/auth', authRoutes);

// Users (admin-only)
router.use('/api/v1/users', authenticateJWT, authorizeAdmin, userRoutes);

// Plants domain — reads are PUBLIC, writes require ADMIN
router.use('/api/v1/plant-taxonomies', publicReadProtectedWrite, plantTaxonomyRoutes);
router.use('/api/v1/plant-nomenclatures', publicReadProtectedWrite, plantNomenclatureRoutes);
router.use('/api/v1/plant-synonyms', publicReadProtectedWrite, plantSynonymRoutes);
router.use('/api/v1/plant-morphologies', publicReadProtectedWrite, plantMorphologyRoutes);
router.use('/api/v1/plant-ecology-distributions', publicReadProtectedWrite, plantEcologyDistributionRoutes);
router.use('/api/v1/plant-conservations', publicReadProtectedWrite, plantConservationRoutes);
router.use('/api/v1/botanical-gardens', publicReadProtectedWrite, botanicalGardenRoutes);
router.use('/api/v1/ethnobotanies', publicReadProtectedWrite, ethnobotanyRoutes);
router.use('/api/v1/medicinal-properties', publicReadProtectedWrite, medicinalPropertiesRoutes);
router.use('/api/v1/herbal-drug-backgrounds', publicReadProtectedWrite, herbalDrugBackgroundRoutes);
router.use('/api/v1/sourcing-backgrounds', publicReadProtectedWrite, sourcingBackgroundRoutes);

export default router;
