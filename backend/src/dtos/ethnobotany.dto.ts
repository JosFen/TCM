// dtos/ethnobotany.dto.ts
import { z } from 'zod';

export const CreateEthnobotanyDto = z.object({
  plantId: z.number().int().positive(),
  folkMedicinalUses: z.string().optional(),
  otherCulturalUses: z.array(z.string()).optional(),
  references: z.string().optional(),
});
export type CreateEthnobotanyDto = z.infer<typeof CreateEthnobotanyDto>;

export const UpdateEthnobotanyDto = z.object({
  folkMedicinalUses: z.string().optional(),
  otherCulturalUses: z.array(z.string()).optional(),
  references: z.string().optional(),
  plantId: z.number().int().positive().optional(),
});
export type UpdateEthnobotanyDto = z.infer<typeof UpdateEthnobotanyDto>;