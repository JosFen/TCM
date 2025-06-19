import { z } from 'zod';

export const CreatePlantNomenclatureDto = z.object({
  plantScientificName: z.string().min(1),
  plantCommonName: z.array(z.string()).min(1),
  plantPinyin: z.string().optional(),
  plantChineseName: z.string().optional(),
  taxonomyId: z.number().int().positive(),
  links: z.array(z.string().url()).optional(),
});
export type CreatePlantNomenclatureDto = z.infer<typeof CreatePlantNomenclatureDto>;

export const UpdatePlantNomenclatureDto = z.object({
  plantScientificName: z.string().min(1).optional(),
  plantCommonName: z.array(z.string()).min(1).optional(),
  plantPinyin: z.string().optional(),
  plantChineseName: z.string().optional(),
  taxonomyId: z.number().int().positive().optional(),
  links: z.array(z.string().url()).optional(),
});
export type UpdatePlantNomenclatureDto = z.infer<typeof UpdatePlantNomenclatureDto>;