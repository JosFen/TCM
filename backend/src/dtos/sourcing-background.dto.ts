// dtos/sourcing-background.dto.ts
import { z } from 'zod';

export const HarvestingPractice = z.enum([
  'CULTIVATED',
  'WILD_HARVESTED'
]);
export type HarvestingPractice = z.infer<typeof HarvestingPractice>;

export const CreateSourcingBackgroundDto = z.object({
  herbalDrugId: z.number().int().positive(),
  cultivationStatus: z.boolean().optional(),
  cultivationRegions: z.string().optional(),
  wildHarvestingRegions: z.string().optional(),
  harvestingPractice: z.array(HarvestingPractice).min(1, "At least one harvesting practice is required"),
  harvestingPracticeNote: z.string().optional(),
  daodiStatus: z.boolean().optional(),
  daodiRegions: z.string().optional(),
  productionRegions: z.string().optional(),
});
export type CreateSourcingBackgroundDto = z.infer<typeof CreateSourcingBackgroundDto>;

export const UpdateSourcingBackgroundDto = z.object({
  cultivationStatus: z.boolean().optional(),
  cultivationRegions: z.string().optional(),
  wildHarvestingRegions: z.string().optional(),
  harvestingPractice: z.array(HarvestingPractice).optional(),
  harvestingPracticeNote: z.string().optional(),
  daodiStatus: z.boolean().optional(),
  daodiRegions: z.string().optional(),
  productionRegions: z.string().optional(),
});
export type UpdateSourcingBackgroundDto = z.infer<typeof UpdateSourcingBackgroundDto>;