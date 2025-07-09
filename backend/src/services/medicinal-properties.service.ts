// services/medicinal-properties.service.ts
import prisma from "../prismadb";
import {
  CreateMedicinalPropertiesDto,
  UpdateMedicinalPropertiesDto
} from "../dtos/medicinal-properties.dto";

export const MedicinalPropertiesService = {
  async create(data: CreateMedicinalPropertiesDto) {
    try {
      return await prisma.medicinalProperties.create({
        data: {
          pharmaceuticalName: data.pharmaceuticalName,
          herbalDrugPinyin: data.herbalDrugPinyin,
          taste: data.taste,
          energyFlow: data.energyFlow,
          meridians: data.meridians,
          actions: data.actions,
          pharmacologicalProperties: data.pharmacologicalProperties,
          indications: data.indications,
          toxicity: data.toxicity,
          secondaryMetabolites: data.secondaryMetabolites,
        },
        include: {
          herbalDrugs: {
            select: {
              id: true,
              herbalDrugPinyin: true,
            },
          },
        },
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2002') {
          throw new Error('Medicinal property with this pharmaceutical name already exists');
        }
      }
      throw error;
    }
  },

  async findAll() {
    return prisma.medicinalProperties.findMany({
      include: {
        herbalDrugs: {
          select: {
            id: true,
            herbalDrugPinyin: true,
          },
        },
      },
      orderBy: {
        pharmaceuticalName: 'asc',
      },
    });
  },

  async findOne(id: number) {
    return prisma.medicinalProperties.findUnique({
      where: { id },
      include: {
        herbalDrugs: {
          select: {
            id: true,
            herbalDrugPinyin: true,
          },
        },
      },
    });
  },

  async findByPharmaceuticalName(name: string) {
    return prisma.medicinalProperties.findFirst({
      where: { pharmaceuticalName: { contains: name, mode: 'insensitive' } },
      include: {
        herbalDrugs: {
          select: {
            id: true,
            herbalDrugPinyin: true,
          },
        },
      },
    });
  },

  async update(id: number, data: UpdateMedicinalPropertiesDto) {
    try {
      return await prisma.medicinalProperties.update({
        where: { id },
        data: {
          pharmaceuticalName: data.pharmaceuticalName,
          herbalDrugPinyin: data.herbalDrugPinyin,
          taste: data.taste,
          energyFlow: data.energyFlow,
          meridians: data.meridians,
          actions: data.actions,
          pharmacologicalProperties: data.pharmacologicalProperties,
          indications: data.indications,
          toxicity: data.toxicity,
          secondaryMetabolites: data.secondaryMetabolites,
        },
        include: {
          herbalDrugs: {
            select: {
              id: true,
              herbalDrugPinyin: true,
            },
          },
        },
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2002') {
          throw new Error('Medicinal property with this pharmaceutical name already exists');
        }
        if (error.code === 'P2025') {
          throw new Error('Medicinal property not found');
        }
      }
      throw error;
    }
  },

  async delete(id: number) {
    try {
      return await prisma.medicinalProperties.delete({
        where: { id },
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2025') {
          throw new Error('Medicinal property not found');
        }
      }
      throw error;
    }
  },

  async addHerbalDrug(medicinalPropertyId: number, herbalDrugId: number) {
    try {
      return await prisma.medicinalProperties.update({
        where: { id: medicinalPropertyId },
        data: {
          herbalDrugs: {
            connect: { id: herbalDrugId },
          },
        },
        include: {
          herbalDrugs: true,
        },
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2025') {
          throw new Error('Medicinal property or herbal drug not found');
        }
      }
      throw error;
    }
  },

  async removeHerbalDrug(medicinalPropertyId: number, herbalDrugId: number) {
    try {
      return await prisma.medicinalProperties.update({
        where: { id: medicinalPropertyId },
        data: {
          herbalDrugs: {
            disconnect: { id: herbalDrugId },
          },
        },
        include: {
          herbalDrugs: true,
        },
      });
    } catch (error) {
      if (typeof error === 'object' && error && 'code' in error) {
        if (error.code === 'P2025') {
          throw new Error('Medicinal property or herbal drug not found');
        }
      }
      throw error;
    }
  },
};