import { z } from 'zod';
import { Lifecycle, Month } from '../prismadb';
// import { Lifecycle, Month } from '@prisma/client';

// enum Month {
//   JANUARY,
//   FEBRUARY,
//   MARCH,
//   APRIL,
//   MAY,
//   JUNE,
//   JULY,
//   AUGUST,
//   SEPTEMBER,
//   OCTOBER,
//   NOVEMBER,
//   DECEMBER,
// }

// enum Lifecycle {
//   ANNUAL,
//   BIENNIAL,
//   PERENNIAL,
// }

export const LifecycleEnum = z.nativeEnum(Lifecycle);
export const MonthEnum = z.nativeEnum(Month);

export const CreatePlantMorphologyDto = z.object({
  lifecycle: z.array(LifecycleEnum).min(1),
  isTerrestrial: z.boolean().optional(),
  growthHabit: z.string().optional(),
  isDeciduous: z.boolean().optional(),
  isDeciduousNote: z.string().optional(),
  reproductiveSystem: z.string().optional(),
  floweringPeriod: z.array(MonthEnum).optional(),
  fruitingPeriod: z.array(MonthEnum).optional(),
  floweringPeriodNote: z.string().optional(),
  fruitingPeriodNote: z.string().optional(),
  plantIds: z.array(z.number().int().positive()).optional(),
});
export type CreatePlantMorphologyDto = z.infer<typeof CreatePlantMorphologyDto>;

export const UpdatePlantMorphologyDto = z.object({
  lifecycle: z.array(LifecycleEnum).optional(),
  isTerrestrial: z.boolean().optional(),
  growthHabit: z.string().optional(),
  isDeciduous: z.boolean().optional(),
  isDeciduousNote: z.string().optional(),
  reproductiveSystem: z.string().optional(),
  floweringPeriod: z.array(MonthEnum).optional(),
  fruitingPeriod: z.array(MonthEnum).optional(),
  floweringPeriodNote: z.string().optional(),
  fruitingPeriodNote: z.string().optional(),
  plantIds: z.array(z.number().int().positive()).optional(),
});
export type UpdatePlantMorphologyDto = z.infer<typeof UpdatePlantMorphologyDto>;