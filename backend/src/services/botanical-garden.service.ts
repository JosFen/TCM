// services/botanical-garden.service.ts
import prisma from "../prismadb";
import {
  CreateBotanicalGardenDto,
  UpdateBotanicalGardenDto
} from "../dtos/botanical-garden.dto";

export const BotanicalGardenService = {
  async create(data: CreateBotanicalGardenDto) {
    try {
      return await prisma.botanicalGarden.create({
        data: {
          botanicalGardenName: data.botanicalGardenName,
        },
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2002') {
          throw new Error('Botanical garden with this name already exists');
        }
      }
      throw error;
    }
  },

  async findAll() {
    return prisma.botanicalGarden.findMany({
      include: {
        plants: {
          select: {
            internalId: true,
            plantScientificName: true,
          },
        },
      },
      orderBy: {
        botanicalGardenName: 'asc',
      },
    });
  },

  async findOne(id: number) {
    return prisma.botanicalGarden.findUnique({
      where: { id },
      include: {
        plants: {
          select: {
            internalId: true,
            plantScientificName: true,
            plantCommonName: true,
          },
        },
      },
    });
  },

  async findByName(name: string) {
    return prisma.botanicalGarden.findFirst({
      where: { botanicalGardenName: { contains: name, mode: 'insensitive' } },
      include: {
        plants: {
          select: {
            internalId: true,
            plantScientificName: true,
          },
        },
      },
    });
  },

  async update(id: number, data: UpdateBotanicalGardenDto) {
    try {
      return await prisma.botanicalGarden.update({
        where: { id },
        data: {
          botanicalGardenName: data.botanicalGardenName,
        },
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2002') {
          throw new Error('Botanical garden with this name already exists');
        }
        if (error.code === 'P2025') {
          throw new Error('Botanical garden not found');
        }
      }
      throw error;
    }
  },

  async delete(id: number) {
    try {
      return await prisma.botanicalGarden.delete({
        where: { id },
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2025') {
          throw new Error('Botanical garden not found');
        }
      }
      throw error;
    }
  },

  async addPlant(gardenId: number, plantId: number) {
    try {
      return await prisma.botanicalGarden.update({
        where: { id: gardenId },
        data: {
          plants: {
            connect: { internalId: plantId },
          },
        },
        include: {
          plants: true,
        },
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2025') {
          throw new Error('Botanical garden or plant not found');
        }
      }
      throw error;
    }
  },

  async removePlant(gardenId: number, plantId: number) {
    try {
      return await prisma.botanicalGarden.update({
        where: { id: gardenId },
        data: {
          plants: {
            disconnect: { internalId: plantId },
          },
        },
        include: {
          plants: true,
        },
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2025') {
          throw new Error('Botanical garden or plant not found');
        }
      }
      throw error;
    }
  },
};