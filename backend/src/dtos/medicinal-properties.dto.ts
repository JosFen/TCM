// dtos/medicinal-properties.dto.ts
import { z } from 'zod';

export const Taste = z.enum([
  'ACRID', 'ASTRINGENT', 'BITTER', 'BLAND', 
  'PUNGENT', 'SALTY', 'SOUR', 'SWEET'
]);
export type Taste = z.infer<typeof Taste>;

export const EnergyFlow = z.enum([
  'SLIGHTLY_COLD', 'COLD', 'NEUTRAL', 
  'SLIGHTLY_WARM', 'WARM', 'HOT'
]);
export type EnergyFlow = z.infer<typeof EnergyFlow>;

export const Meridian = z.enum([
  'BLADDER', 'GALLBLADDER', 'HEART', 'INTESTINE',
  'KIDNEY', 'LARGE_INTESTINE', 'LIVER', 'LUNG',
  'PERICARDIUM', 'SAN_JIAO', 'SMALL_INTESTINE',
  'SPLEEN', 'STOMACH'
]);
export type Meridian = z.infer<typeof Meridian>;

export const CreateMedicinalPropertiesDto = z.object({
  pharmaceuticalName: z.string().optional(),
  herbalDrugPinyin: z.string().optional(),
  taste: z.array(Taste).min(1, "At least one taste is required"),
  energyFlow: z.array(EnergyFlow).min(1, "At least one energy flow is required"),
  meridians: z.array(Meridian).min(1, "At least one meridian is required"),
  actions: z.string().optional(),
  pharmacologicalProperties: z.array(z.string()).optional(),
  indications: z.array(z.string()).optional(),
  toxicity: z.string().optional(),
  secondaryMetabolites: z.string().optional(),
});
export type CreateMedicinalPropertiesDto = z.infer<typeof CreateMedicinalPropertiesDto>;

export const UpdateMedicinalPropertiesDto = z.object({
  pharmaceuticalName: z.string().optional(),
  herbalDrugPinyin: z.string().optional(),
  taste: z.array(Taste).optional(),
  energyFlow: z.array(EnergyFlow).optional(),
  meridians: z.array(Meridian).optional(),
  actions: z.string().optional(),
  pharmacologicalProperties: z.array(z.string()).optional(),
  indications: z.array(z.string()).optional(),
  toxicity: z.string().optional(),
  secondaryMetabolites: z.string().optional(),
});
export type UpdateMedicinalPropertiesDto = z.infer<typeof UpdateMedicinalPropertiesDto>;