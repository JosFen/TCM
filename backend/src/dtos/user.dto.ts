// src/dtos/user.dto.ts
import { z } from 'zod';

// Create User Validation
export const CreateUserDto = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
  email: z.string().email().optional(),
});
export type CreateUserDto = z.infer<typeof CreateUserDto>;

// Update User Validation
export const UpdateUserDto = z.object({
  password: z.string().min(6).optional(),
  email: z.string().email().optional(),
  isActive: z.boolean().optional(),
  role: z.enum(['USER', 'ADMIN']).optional(),
});
export type UpdateUserDto = z.infer<typeof UpdateUserDto>;
