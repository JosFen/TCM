// dtos/plant-ecology-distribution.dto.ts
import { z } from 'zod';

export const CreatePlantEcologyDistributionDto = z.object({
  habitat: z.string().optional(),
  plantOrigin: z.string().optional(),
  globalRange: z.string().optional(),
  chinaRange: z.string().optional(),
  endemic: z.string().optional(),
  plantId: z.number().int().positive()
});
export type CreatePlantEcologyDistributionDto = z.infer<typeof CreatePlantEcologyDistributionDto>;

export const UpdatePlantEcologyDistributionDto = z.object({
  habitat: z.string().optional(),
  plantOrigin: z.string().optional(),
  globalRange: z.string().optional(),
  chinaRange: z.string().optional(),
  endemic: z.string().optional(),
  plantId: z.number().int().positive().optional()
});
export type UpdatePlantEcologyDistributionDto = z.infer<typeof UpdatePlantEcologyDistributionDto>;