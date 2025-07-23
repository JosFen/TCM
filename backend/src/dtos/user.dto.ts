// src/dtos/user.dto.ts
import { z } from 'zod';

export const RoleEnum = z.enum(['USER', 'ADMIN']);
export type RoleEnum = z.infer<typeof RoleEnum>;

export const CreateUserDto = z.object({
  username: z.string().min(3),
  password: z.string().min(8).regex(/[A-Z]/).regex(/[0-9]/),
  email: z.string().email().optional(),
  role: RoleEnum.optional()
});

export const UpdateUserDto = z.object({
  password: z.string().min(8).regex(/[A-Z]/).regex(/[0-9]/).optional(),
  email: z.string().email().optional(),
  isActive: z.boolean().optional(),
  role: RoleEnum.optional()
});
export type CreateUserDto = z.infer<typeof CreateUserDto>;

export type UpdateUserDto = z.infer<typeof UpdateUserDto>;
