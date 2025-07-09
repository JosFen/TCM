// services/sourcing-background.service.ts
import prisma from "../prismadb";
import { Prisma } from '@prisma/client';
import {
  CreateSourcingBackgroundDto,
  UpdateSourcingBackgroundDto
} from "../dtos/sourcing-background.dto";

export const SourcingBackgroundService = {
  async create(data: CreateSourcingBackgroundDto) {
    try {
      return await prisma.sourcingBackground.create({
        data: {
          herbalDrugId: data.herbalDrugId,
          cultivationStatus: data.cultivationStatus,
          cultivationRegions: data.cultivationRegions,
          wildHarvestingRegions: data.wildHarvestingRegions,
          harvestingPractice: data.harvestingPractice,
          harvestingPracticeNote: data.harvestingPracticeNote,
          daodiStatus: data.daodiStatus,
          daodiRegions: data.daodiRegions,
          productionRegions: data.productionRegions,
        },
        include: {
          herbalDrug: {
            include: {
              plant: {
                select: {
                  plantScientificName: true,
                },
              },
              medicinalProperty: {
                select: {
                  pharmaceuticalName: true,
                },
              },
            },
          },
        },
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2002') {
          throw new Error('Sourcing background already exists for this herbal drug');
        }
        if (error.code === 'P2003') {
          throw new Error('Invalid herbal drug reference');
        }
      }
      throw error;
    }
  },

  async findAll() {
    return prisma.sourcingBackground.findMany({
      include: {
        herbalDrug: {
          include: {
            plant: {
              select: {
                plantScientificName: true,
              },
            },
            medicinalProperty: {
              select: {
                pharmaceuticalName: true,
              },
            },
          },
        },
      },
    });
  },

  async findOne(id: number) {
    return prisma.sourcingBackground.findUnique({
      where: { id },
      include: {
        herbalDrug: {
          include: {
            plant: {
              select: {
                plantScientificName: true,
                plantCommonName: true,
              },
            },
            medicinalProperty: {
              select: {
                pharmaceuticalName: true,
              },
            },
          },
        },
      },
    });
  },

  async findByHerbalDrugId(herbalDrugId: number) {
    return prisma.sourcingBackground.findUnique({
      where: { herbalDrugId },
      include: {
        herbalDrug: {
          include: {
            plant: {
              select: {
                plantScientificName: true,
              },
            },
            medicinalProperty: {
              select: {
                pharmaceuticalName: true,
              },
            },
          },
        },
      },
    });
  },

  async update(id: number, data: UpdateSourcingBackgroundDto) {
    try {
      return await prisma.sourcingBackground.update({
        where: { id },
        data: {
          cultivationStatus: data.cultivationStatus,
          cultivationRegions: data.cultivationRegions,
          wildHarvestingRegions: data.wildHarvestingRegions,
          harvestingPractice: data.harvestingPractice,
          harvestingPracticeNote: data.harvestingPracticeNote,
          daodiStatus: data.daodiStatus,
          daodiRegions: data.daodiRegions,
          productionRegions: data.productionRegions,
        },
        include: {
          herbalDrug: {
            include: {
              plant: {
                select: {
                  plantScientificName: true,
                },
              },
              medicinalProperty: {
                select: {
                  pharmaceuticalName: true,
                },
              },
            },
          },
        },
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2025') {
          throw new Error('Sourcing background not found');
        }
      }
      throw error;
    }
  },

  async delete(id: number) {
    try {
      return await prisma.sourcingBackground.delete({
        where: { id },
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2025') {
          throw new Error('Sourcing background not found');
        }
      }
      throw error;
    }
  },
};