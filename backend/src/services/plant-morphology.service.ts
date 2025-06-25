import prisma from '../prismadb';
import { 
  CreatePlantMorphologyDto,
  UpdatePlantMorphologyDto 
} from '../dtos/plant-morphology.dto';

export const PlantMorphologyService = {
  async create(data: CreatePlantMorphologyDto) {
    return prisma.plantMorphology.create({
      data: {
        lifecycle: data.lifecycle,
        isTerrestrial: data.isTerrestrial,
        growthHabit: data.growthHabit,
        isDeciduous: data.isDeciduous,
        isDeciduousNote: data.isDeciduousNote,
        reproductiveSystem: data.reproductiveSystem,
        floweringPeriod: data.floweringPeriod,
        fruitingPeriod: data.fruitingPeriod,
        floweringPeriodNote: data.floweringPeriodNote,
        fruitingPeriodNote: data.fruitingPeriodNote,
        plants: data.plantIds ? {
          connect: data.plantIds.map(id => ({ internalId: id }))
        } : undefined,
      },
      include: {
        plants: {
          include: {
            taxonomy: true,
          },
        },
      },
    });
  },

  async findAll() {
    return prisma.plantMorphology.findMany({
      include: {
        plants: {
          include: {
            taxonomy: true,
          },
        },
      },
      orderBy: {
        id: 'asc',
      },
    });
  },

  async findOne(id: number) {
    return prisma.plantMorphology.findUnique({
      where: { id },
      include: {
        plants: {
          include: {
            taxonomy: true,
          },
        },
      },
    });
  },

  async findByPlantId(plantId: number) {
    return prisma.plantMorphology.findMany({
      where: {
        plants: {
          some: {
            internalId: plantId,
          },
        },
      },
      include: {
        plants: {
          include: {
            taxonomy: true,
          },
        },
      },
    });
  },

  async update(id: number, data: UpdatePlantMorphologyDto) {
    return prisma.plantMorphology.update({
      where: { id },
      data: {
        lifecycle: data.lifecycle,
        isTerrestrial: data.isTerrestrial,
        growthHabit: data.growthHabit,
        isDeciduous: data.isDeciduous,
        isDeciduousNote: data.isDeciduousNote,
        reproductiveSystem: data.reproductiveSystem,
        floweringPeriod: data.floweringPeriod,
        fruitingPeriod: data.fruitingPeriod,
        floweringPeriodNote: data.floweringPeriodNote,
        fruitingPeriodNote: data.fruitingPeriodNote,
        plants: data.plantIds ? {
          set: data.plantIds.map(id => ({ internalId: id }))
        } : undefined,
      },
      include: {
        plants: {
          include: {
            taxonomy: true,
          },
        },
      },
    });
  },

  async delete(id: number) {
    return prisma.plantMorphology.delete({
      where: { id },
    });
  },
};