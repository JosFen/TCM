// services/plant-ecology-distribution.service.ts
import prisma from "../prismadb";
import { 
  CreatePlantEcologyDistributionDto,
  UpdatePlantEcologyDistributionDto 
} from "../dtos/plant-ecology-distribution.dto";

export const PlantEcologyDistributionService = {
  async create(data: CreatePlantEcologyDistributionDto) {
    return prisma.plantEcologyDistribution.create({
      data: {
        habitat: data.habitat,
        plantOrigin: data.plantOrigin,
        globalRange: data.globalRange,
        chinaRange: data.chinaRange,
        endemic: data.endemic,
        plantId: data.plantId
      },
      include: {
        plant: true
      }
    });
  },

  async findAll() {
    return prisma.plantEcologyDistribution.findMany({
      include: {
        plant: true
      }
    });
  },

  async findOne(id: number) {
    return prisma.plantEcologyDistribution.findUnique({
      where: { id },
      include: {
        plant: true
      }
    });
  },

  async findByPlantId(plantId: number) {
    return prisma.plantEcologyDistribution.findUnique({
      where: { plantId },
      include: {
        plant: true
      }
    });
  },

  async update(id: number, data: UpdatePlantEcologyDistributionDto) {
    return prisma.plantEcologyDistribution.update({
      where: { id },
      data,
      include: {
        plant: true
      }
    });
  },

  async delete(id: number) {
    return prisma.plantEcologyDistribution.delete({
      where: { id }
    });
  }
};