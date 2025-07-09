// services/herbal-drug-background.service.ts
import prisma from "../prismadb";
import {
  CreateHerbalDrugBackgroundDto,
  UpdateHerbalDrugBackgroundDto
} from "../dtos/herbal-drug-background.dto";

export const HerbalDrugBackgroundService = {
  async create(data: CreateHerbalDrugBackgroundDto) {
    try {
      return await prisma.herbalDrugBackground.create({
        data: {
          herbalDrugPinyin: data.herbalDrugPinyin,
          plantPartUsed: data.plantPartUsed,
          officialStatus: data.officialStatus,
          harvestingTime: data.harvestingTime,
          harvestingTimeNote: data.harvestingTimeNote,
          primaryProcessing: data.primaryProcessing,
          secondaryProcessing: data.secondaryProcessing,
          herbalDruglImage: data.herbalDruglImage,
          plantScientificName: data.plantScientificName,
          pharmaceuticalName: data.pharmaceuticalName,
        },
        include: {
          plant: {
            select: {
              internalId: true,
              plantScientificName: true,
            },
          },
          medicinalProperty: {
            select: {
              id: true,
              pharmaceuticalName: true,
            },
          },
          sourcingBackgrounds: true,
        },
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2002') {
          throw new Error('Herbal drug background with this plant and pharmaceutical combination already exists');
        }
        if (error.code === 'P2003') {
          throw new Error('Invalid plant or pharmaceutical reference');
        }
      }
      throw error;
    }
  },

  async findAll() {
    return prisma.herbalDrugBackground.findMany({
      include: {
        plant: {
          select: {
            internalId: true,
            plantScientificName: true,
          },
        },
        medicinalProperty: {
          select: {
            id: true,
            pharmaceuticalName: true,
          },
        },
        sourcingBackgrounds: true,
      },
      orderBy: {
        pharmaceuticalName: 'asc',
      },
    });
  },

  async findOne(id: number) {
    return prisma.herbalDrugBackground.findUnique({
      where: { id },
      include: {
        plant: {
          select: {
            internalId: true,
            plantScientificName: true,
            plantCommonName: true,
          },
        },
        medicinalProperty: {
          select: {
            id: true,
            pharmaceuticalName: true,
            taste: true,
            energyFlow: true,
          },
        },
        sourcingBackgrounds: true,
      },
    });
  },

  async findByPlantAndPharmaceutical(plantName: string, pharmaceuticalName: string) {
    return prisma.herbalDrugBackground.findFirst({
      where: { 
        plantScientificName: plantName,
        pharmaceuticalName: pharmaceuticalName
      },
      include: {
        plant: {
          select: {
            internalId: true,
            plantScientificName: true,
          },
        },
        medicinalProperty: {
          select: {
            id: true,
            pharmaceuticalName: true,
          },
        },
      },
    });
  },

  async update(id: number, data: UpdateHerbalDrugBackgroundDto) {
    try {
      return await prisma.herbalDrugBackground.update({
        where: { id },
        data: {
          herbalDrugPinyin: data.herbalDrugPinyin,
          plantPartUsed: data.plantPartUsed,
          officialStatus: data.officialStatus,
          harvestingTime: data.harvestingTime,
          harvestingTimeNote: data.harvestingTimeNote,
          primaryProcessing: data.primaryProcessing,
          secondaryProcessing: data.secondaryProcessing,
          herbalDruglImage: data.herbalDruglImage,
          ...(data.plantScientificName && { plantScientificName: data.plantScientificName }),
          ...(data.pharmaceuticalName && { pharmaceuticalName: data.pharmaceuticalName }),
        },
        include: {
          plant: {
            select: {
              internalId: true,
              plantScientificName: true,
            },
          },
          medicinalProperty: {
            select: {
              id: true,
              pharmaceuticalName: true,
            },
          },
        },
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2002') {
          throw new Error('Herbal drug background with this plant and pharmaceutical combination already exists');
        }
        if (error.code === 'P2003') {
          throw new Error('Invalid plant or pharmaceutical reference');
        }
        if (error.code === 'P2025') {
          throw new Error('Herbal drug background not found');
        }
      }
      throw error;
    }
  },

  async delete(id: number) {
    try {
      return await prisma.herbalDrugBackground.delete({
        where: { id },
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2025') {
          throw new Error('Herbal drug background not found');
        }
      }
      throw error;
    }
  },

  async addSourcingBackground(id: number, sourcingBackgroundData: any) {
    try {
      return await prisma.herbalDrugBackground.update({
        where: { id },
        data: {
          sourcingBackgrounds: {
            create: sourcingBackgroundData,
          },
        },
        include: {
          sourcingBackgrounds: true,
        },
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2025') {
          throw new Error('Herbal drug background not found');
        }
      }
      throw error;
    }
  },
};