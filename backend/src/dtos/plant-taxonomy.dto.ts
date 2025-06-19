import { z } from 'zod';

export const CreatePlantTaxonomyDto = z.object({
  class: z.string().optional(),
  family: z.string().min(1),
  vascular: z.boolean().optional(),
});
export type CreatePlantTaxonomyDto = z.infer<typeof CreatePlantTaxonomyDto>;

export const UpdatePlantTaxonomyDto = z.object({
  class: z.string().optional(),
  family: z.string().min(1).optional(),
  vascular: z.boolean().optional(),
});
export type UpdatePlantTaxonomyDto = z.infer<typeof UpdatePlantTaxonomyDto>;