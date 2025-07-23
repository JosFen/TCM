// src/services/admin/user.service.ts
import prisma from '../../prismadb'
import bcrypt from 'bcryptjs';

import { CreateUserDto, UpdateUserDto } from '../../dtos/user.dto';

const SALT_ROUNDS = 10;
// const prisma = new PrismaClient();
export const UserService = {
  // Create user with hashed password
  create: async (dto: CreateUserDto) => {
    const hashedPassword = await bcrypt.hash(dto.password, SALT_ROUNDS);
    return prisma.user.create({
      data: {
        ...dto,
        password: hashedPassword
      }
    });
  },

  // Update user (with optional password hashing)
  update: async (id: string, dto: UpdateUserDto) => {
    if (dto.password) {
      dto.password = await bcrypt.hash(dto.password, SALT_ROUNDS);
    } 
    return prisma.user.update({
      where: { id },
      data: dto,
    })
  },


  // Read (All)
  findAll: async () => {
    return prisma.user.findMany();
  },

  // Read (One)
  findOne: async (id: string) => {
    return prisma.user.findUnique({
      where: { id },
    });
  },


  // Delete
  delete: async (id: string) => {
    return prisma.user.update({
      where: { id },
      data: { isActive: false }, // Soft delete
    });
  },
};