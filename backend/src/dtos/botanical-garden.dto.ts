// dtos/botanical-garden.dto.ts
import { z } from 'zod';

export const CreateBotanicalGardenDto = z.object({
  botanicalGardenName: z.string().min(1, "Name is required"),
});
export type CreateBotanicalGardenDto = z.infer<typeof CreateBotanicalGardenDto>;

export const UpdateBotanicalGardenDto = z.object({
  botanicalGardenName: z.string().min(1, "Name is required").optional(),
});
export type UpdateBotanicalGardenDto = z.infer<typeof UpdateBotanicalGardenDto>;