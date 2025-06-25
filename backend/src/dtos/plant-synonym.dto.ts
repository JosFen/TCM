import { z } from 'zod';

export const CreatePlantSynonymDto = z.object({
  plantId: z.number().int().positive(),
  name: z.string().min(1).optional(),
});
export type CreatePlantSynonymDto = z.infer<typeof CreatePlantSynonymDto>;

export const UpdatePlantSynonymDto = z.object({
  plantId: z.number().int().positive().optional(),
  name: z.string().min(1).optional(),
});
export type UpdatePlantSynonymDto = z.infer<typeof UpdatePlantSynonymDto>;