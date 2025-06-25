import prisma from '../prismadb';
import { 
  CreatePlantSynonymDto,
  UpdatePlantSynonymDto 
} from '../dtos/plant-synonym.dto';

export const PlantSynonymService = {
  async create(data: CreatePlantSynonymDto) {
    return prisma.plantSynonym.create({
      data: {
        plantId: data.plantId,
        name: data.name,
      },
      include: {
        plant: {
          include: {
            taxonomy: true,
          },
        },
      },
    });
  },

  async findAll() {
    return prisma.plantSynonym.findMany({
      include: {
        plant: {
          include: {
            // taxonomy: true,
            taxonomy: false, 
          },
        },
      },
      orderBy: {
        name: 'asc',
      },
    });
  },

  async findByPlantId(plantId: number) {
    return prisma.plantSynonym.findMany({
      where: { plantId },
      include: {
        plant: {
          include: {
            // taxonomy: true,
            taxonomy: false,
          },
        },
      },
    });
  },

  async findOne(id: number) {
    return prisma.plantSynonym.findUnique({
      where: { id },
      include: {
        plant: {
          include: {
            taxonomy: false, // Exclude taxonomy for this query
          },
        },
      },
    });
  },

  async update(id: number, data: UpdatePlantSynonymDto) {
    return prisma.plantSynonym.update({
      where: { id },
      data: {
        plantId: data.plantId,
        name: data.name,
      },
      include: {
        plant: {
          include: {
            taxonomy: false, // Exclude taxonomy for this query
          },
        },
      },
    });
  },

  async delete(id: number) {
    return prisma.plantSynonym.delete({
      where: { id },
    });
  },
};