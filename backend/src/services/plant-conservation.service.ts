// services/plant-conservation.service.ts
import prisma from "../prismadb";
import { 
  CreatePlantConservationDto,
  UpdatePlantConservationDto 
} from "../dtos/plant-conservation.dto";


export const PlantConservationService = {
  async create(data: CreatePlantConservationDto) {
    try {
      return await prisma.plantConservation.create({
        data: {
          globalConservationStatus: data.globalConservationStatus,
          chinaConservationStatus: data.chinaConservationStatus,
          protectedStatus: data.protectedStatus,
          invasiveStatus: data.invasiveStatus,
          invasiveRange: data.invasiveRange,
          plantId: data.plantId
        },
        include: {
          plant: {
            select: {
              internalId: true,
              plantScientificName: true
            }
          }
        }
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2002') {
          throw new Error('Conservation record already exists for this plant');
        }
        if (error.code === 'P2003') {
          throw new Error('Invalid plant ID: Plant does not exist');
        }
      }
      throw error;
    }
  },

  async findAll() {
    return prisma.plantConservation.findMany({
      include: {
        plant: {
          select: {
            internalId: true,
            plantScientificName: true
          }
        }
      },
      orderBy: {
        id: 'asc'
      }
    });
  },

  async findOne(id: number) {
    return prisma.plantConservation.findUnique({
      where: { id },
      include: {
        plant: {
          select: {
            internalId: true,
            plantScientificName: true,
            plantCommonName: true
          }
        }
      }
    });
  },

  async findByPlantId(plantId: number) {
    return prisma.plantConservation.findUnique({
      where: { plantId },
      include: {
        plant: {
          select: {
            internalId: true,
            plantScientificName: true
          }
        }
      }
    });
  },

  async update(id: number, data: UpdatePlantConservationDto) {
    try {
      return await prisma.plantConservation.update({
        where: { id },
        data,
        include: {
          plant: {
            select: {
              internalId: true,
              plantScientificName: true
            }
          }
        }
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2003') {
          throw new Error('Invalid plant ID: Plant does not exist');
        }
      }
      throw error;
    }
  },

  async delete(id: number) {
    try {
      return await prisma.plantConservation.delete({
        where: { id }
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2025') {
          throw new Error('Conservation record not found');
        }
      }
      throw error;
    }
  }
};