import prisma from "../prismadb";
import { CreatePlantNomenclatureDto, UpdatePlantNomenclatureDto } from "../dtos/plant-nomenclature.dto";


export const PlantNomenclatureService = {
    async create (data: CreatePlantNomenclatureDto) {
        return prisma.plantNomenclature.create({
            data: data,
            // include: {
            //     taxonomy: true,
            //     ecologyDistributions: true,
            //     conservation: true,
            //     ethnobotanies: true,
            // },
        })
    },

    async findAll () {
        return prisma.plantNomenclature.findMany({
            // include: {
            //     taxonomy: true,
            //     ecologyDistributions: true,
            //     conservation: true,
            //     ethnobotanies: true,
            //     synonyms: true,
            //     morphologies: true,
            // },
        })
    },
    async findOne (id: number) {
        return prisma.plantNomenclature.findUnique({
            where: { internalId: id },
            // include: {
            //     taxonomy: true,
            //     synonyms: true,
            //     morphologies: true,
            //     ecologyDistributions: true,
            //     conservation: true,
            //     ethnobotanies: true,
            //     botanicalGardenList: true,
            //     herbalDrugs: true,
            // },
        })
    },
    async findByScientificName(name: string) {
        return prisma.plantNomenclature.findUnique({
            where: { plantScientificName: name },
            include: {
                taxonomy: true,
            },
        });
    },
    async update(id: number, data: UpdatePlantNomenclatureDto) {
        return prisma.plantNomenclature.update({
            where: { internalId: id },
            data: data,
        });
    },

    async delete(id: number) {
        return prisma.plantNomenclature.delete({
            where: { internalId: id },
        });
    },
} 