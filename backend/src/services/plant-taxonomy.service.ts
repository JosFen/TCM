import prisma from '../prismadb';
import { CreatePlantTaxonomyDto, UpdatePlantTaxonomyDto } from '../dtos/plant-taxonomy.dto';

export const PlantTaxonomyService = {
  async create(data: CreatePlantTaxonomyDto) {
    return prisma.plantTaxonomy.create({
      data: {
        class: data.class,
        family: data.family,
        vascular: data.vascular,
      },
    });
  },

  async findAll() {
    return prisma.plantTaxonomy.findMany({
    //   include: {
    //     plants: true,
    //   },
    });
  },

  async findOne(id: number) {
    return prisma.plantTaxonomy.findUnique({
      where: { id },
    //   include: {
    //     plants: true,
    //   },
    });
  },

  async update(id: number, data: UpdatePlantTaxonomyDto) {
    return prisma.plantTaxonomy.update({
      where: { id },
      data: {
        class: data.class,
        family: data.family,
        vascular: data.vascular,
      },
    });
  },

  async delete(id: number) {
    return prisma.plantTaxonomy.delete({
      where: { id },
    });
  },
};