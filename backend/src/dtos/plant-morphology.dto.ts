import { z } from 'zod';
// import { Lifecycle, Month } from '../prismadb';  // string for now

// Enums for lifecycle and month - redefined here:
export enum Month {
  JANUARY = 'JANUARY',
  FEBRUARY = 'FEBRUARY',
  MARCH = 'MARCH',
  APRIL = 'APRIL',
  MAY = 'MAY',
  JUNE = 'JUNE',
  JULY = 'JULY',
  AUGUST = 'AUGUST',
  SEPTEMBER = 'SEPTEMBER',
  OCTOBER = 'OCTOBER',
  NOVEMBER = 'NOVEMBER',
  DECEMBER = 'DECEMBER',
}

export enum Lifecycle {
  ANNUAL = 'ANNUAL',
  BIENNIAL = 'BIENNIAL',
  PERENNIAL = 'PERENNIAL',
}


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
  isDeciduous: z.boolean().optional().nullable(),         // <-- fix
  isDeciduousNote: z.string().optional().nullable(),
  reproductiveSystem: z.string().optional(),
  floweringPeriod: z.array(MonthEnum).optional(),
  fruitingPeriod: z.array(MonthEnum).optional(),
  floweringPeriodNote: z.string().optional(),
  fruitingPeriodNote: z.string().optional(),
  plantIds: z.array(z.number().int().positive()).optional(),
});
export type UpdatePlantMorphologyDto = z.infer<typeof UpdatePlantMorphologyDto>;