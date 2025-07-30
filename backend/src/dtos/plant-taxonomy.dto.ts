import { z } from 'zod';
// import { IsOptional, IsString } from 'class-validator';

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

// export class PlantTaxonomySuggestionQueryDto {
//   @IsOptional()
//   @IsString()
//   q?: string;
// }
