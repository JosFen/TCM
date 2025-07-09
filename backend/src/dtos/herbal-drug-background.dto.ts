// dtos/herbal-drug-background.dto.ts
import { z } from 'zod';

export const Month = z.enum([
  'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
  'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
]);
export type Month = z.infer<typeof Month>;

export const CreateHerbalDrugBackgroundDto = z.object({
  herbalDrugPinyin: z.string().min(1, "Pinyin is required"),
  plantPartUsed: z.string().optional(),
  officialStatus: z.boolean().optional(),
  harvestingTime: z.array(Month).min(1, "At least one month is required"),
  harvestingTimeNote: z.string().optional(),
  primaryProcessing: z.string().optional(),
  secondaryProcessing: z.string().optional(),
  herbalDruglImage: z.string().optional(),
  plantScientificName: z.string().min(1, "Plant scientific name is required"),
  pharmaceuticalName: z.string().min(1, "Pharmaceutical name is required"),
});
export type CreateHerbalDrugBackgroundDto = z.infer<typeof CreateHerbalDrugBackgroundDto>;

export const UpdateHerbalDrugBackgroundDto = z.object({
  herbalDrugPinyin: z.string().min(1, "Pinyin is required").optional(),
  plantPartUsed: z.string().optional(),
  officialStatus: z.boolean().optional(),
  harvestingTime: z.array(Month).optional(),
  harvestingTimeNote: z.string().optional(),
  primaryProcessing: z.string().optional(),
  secondaryProcessing: z.string().optional(),
  herbalDruglImage: z.string().optional(),
  plantScientificName: z.string().min(1, "Plant scientific name is required").optional(),
  pharmaceuticalName: z.string().min(1, "Pharmaceutical name is required").optional(),
});
export type UpdateHerbalDrugBackgroundDto = z.infer<typeof UpdateHerbalDrugBackgroundDto>;