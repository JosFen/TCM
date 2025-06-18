// src/services/user.service.ts
import prisma from '../../prismadb'

import { CreateUserDto, UpdateUserDto } from '../../dtos/user.dto';


// const prisma = new PrismaClient();
export const UserService = {
  // Create
  create: async (dto: CreateUserDto) => {
    return prisma.user.create({
      data: dto,
    });
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

  // Update
  update: async (id: string, dto: UpdateUserDto) => {
    return prisma.user.update({
      where: { id },
      data: dto,
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