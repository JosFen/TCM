// dtos/plant-conservation.dto.ts
import { z } from 'zod';

// Enums to exactly match your Prisma model
export const GlobalConservationStatus = z.enum([
  'CRITICALLY_ENDANGERED',
  'ENDANGERED',
  'VULNERABLE',
  'NEAR_THREATENED',
  'LEAST_CONCERN',
  'DATA_DEFICIENT',
  'NOT_EVALUATED'
]);

export const InvasiveStatus = z.enum([
  'NON_INVASIVE',
  'POSSIBLY_INVASIVE',
  'INVASIVE'
]);

export const CreatePlantConservationDto = z.object({
  globalConservationStatus: GlobalConservationStatus.optional(),
  chinaConservationStatus: z.string().optional(),
  protectedStatus: z.string().optional(),
  invasiveStatus: InvasiveStatus.optional(),
  invasiveRange: z.string().optional(),
  plantId: z.number().int().positive()
});
export type CreatePlantConservationDto = z.infer<typeof CreatePlantConservationDto>;

export const UpdatePlantConservationDto = z.object({
  globalConservationStatus: GlobalConservationStatus.optional(),
  chinaConservationStatus: z.string().optional(),
  protectedStatus: z.string().optional(),
  invasiveStatus: InvasiveStatus.optional(),
  invasiveRange: z.string().optional(),
  plantId: z.number().int().positive().optional()
});
export type UpdatePlantConservationDto = z.infer<typeof UpdatePlantConservationDto>;