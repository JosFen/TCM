// services/ethnobotany.service.ts
import prisma from "../prismadb";
import {
  CreateEthnobotanyDto,
  UpdateEthnobotanyDto
} from "../dtos/ethnobotany.dto";

export const EthnobotanyService = {
  async create(data: CreateEthnobotanyDto) {
    try {
      return await prisma.ethnobotany.create({
        data: {
          plantId: data.plantId,
          folkMedicinalUses: data.folkMedicinalUses,
          otherCulturalUses: data.otherCulturalUses,
          references: data.references,
        },
        include: {
          plant: {
            select: {
              internalId: true,
              plantScientificName: true,
            },
          },
        },
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2002') {
          throw new Error('Ethnobotany record already exists for this plant');
        }
        if (error.code === 'P2003') {
          throw new Error('Invalid plant ID: Plant does not exist');
        }
      }
      throw error;
    }
  },

  async findAll() {
    return prisma.ethnobotany.findMany({
      include: {
        plant: {
          select: {
            internalId: true,
            plantScientificName: true,
          },
        },
      },
      orderBy: {
        id: 'asc',
      },
    });
  },

  async findOne(id: number) {
    return prisma.ethnobotany.findUnique({
      where: { id },
      include: {
        plant: {
          select: {
            internalId: true,
            plantScientificName: true,
            plantCommonName: true,
          },
        },
      },
    });
  },

  async findByPlantId(plantId: number) {
    return prisma.ethnobotany.findUnique({
      where: { plantId },
      include: {
        plant: {
          select: {
            internalId: true,
            plantScientificName: true,
          },
        },
      },
    });
  },

  async update(id: number, data: UpdateEthnobotanyDto) {
    try {
      return await prisma.ethnobotany.update({
        where: { id },
        data: {
          folkMedicinalUses: data.folkMedicinalUses,
          otherCulturalUses: data.otherCulturalUses,
          references: data.references,
          ...(data.plantId && { plantId: data.plantId }),
        },
        include: {
          plant: {
            select: {
              internalId: true,
              plantScientificName: true,
            },
          },
        },
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2002') {
          throw new Error('Ethnobotany record already exists for the new plant ID');
        }
        if (error.code === 'P2003') {
          throw new Error('Invalid plant ID: Plant does not exist');
        }
        if (error.code === 'P2025') {
          throw new Error('Ethnobotany record not found');
        }
      }
      throw error;
    }
  },

  async delete(id: number) {
    try {
      return await prisma.ethnobotany.delete({
        where: { id },
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2025') {
          throw new Error('Ethnobotany record not found');
        }
      }
      throw error;
    }
  },
};