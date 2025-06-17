// src/dtos/user.dto.ts
import { z } from 'zod';

// Create User Validation
export const CreateUserDto = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});
export type CreateUserDto = z.infer<typeof CreateUserDto>;

// Update User Validation
export const UpdateUserDto = z.object({
  username: z.string().min(3).optional(),
  password: z.string().min(6).optional(),
});
export type UpdateUserDto = z.infer<typeof UpdateUserDto>;