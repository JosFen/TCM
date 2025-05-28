-- CreateEnum
CREATE TYPE "Lifecycle" AS ENUM ('ANNUAL', 'BIENNIAL', 'PERENNIAL');

-- CreateEnum
CREATE TYPE "Month" AS ENUM ('JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER');

-- CreateEnum
CREATE TYPE "Season" AS ENUM ('SPRING', 'SUMMER', 'AUTUMN', 'WINTER');

-- CreateEnum
CREATE TYPE "Taste" AS ENUM ('ACRID', 'ASTRINGENT', 'BITTER', 'BLAND', 'PUNGENT', 'SALTY', 'SOUR', 'SWEET');

-- CreateEnum
CREATE TYPE "EnergyFlow" AS ENUM ('SLIGHTLY_COLD', 'COLD', 'NEUTRAL', 'SLIGHTLY_WARM', 'WARM', 'HOT');

-- CreateEnum
CREATE TYPE "Meridian" AS ENUM ('BLADDER', 'GALLBLADDER', 'HEART', 'INTESTINE', 'KIDNEY', 'LARGE_INTESTINE', 'LIVER', 'LUNG', 'PERICARDIUM', 'SAN_JIAO', 'SMALL_INTESTINE', 'SPLEEN', 'STOMACH');

-- CreateEnum
CREATE TYPE "GlobalConservationStatus" AS ENUM ('CRITICALLY_ENDANGERED', 'ENDANGERED', 'VULNERABLE', 'NEAR_THREATENED', 'LEAST_CONCERN', 'DATA_DEFICIENT', 'NOT_EVALUATED');

-- CreateEnum
CREATE TYPE "InvasiveStatus" AS ENUM ('NON_INVASIVE', 'POSSIBLY_INVASIVE', 'INVASIVE');

-- CreateEnum
CREATE TYPE "HarvestingPractice" AS ENUM ('CULTIVATED', 'WILD_HARVESTED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plant_nomenclature" (
    "internal_id" SERIAL NOT NULL,
    "scientific_name" TEXT NOT NULL,
    "common_names" TEXT[],
    "pinyin" TEXT,
    "chinese_name" TEXT,
    "taxonomy_id" INTEGER NOT NULL,
    "links" TEXT[],

    CONSTRAINT "plant_nomenclature_pkey" PRIMARY KEY ("internal_id")
);

-- CreateTable
CREATE TABLE "plant_taxonomy" (
    "id" SERIAL NOT NULL,
    "class" TEXT,
    "family" TEXT NOT NULL,
    "is_vascular" BOOLEAN,

    CONSTRAINT "plant_taxonomy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plant_synonym" (
    "id" SERIAL NOT NULL,
    "plant_id" INTEGER NOT NULL,
    "name" TEXT,

    CONSTRAINT "plant_synonym_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plant_morphology" (
    "id" SERIAL NOT NULL,
    "lifecycle" "Lifecycle"[],
    "is_terrestrial" BOOLEAN,
    "growth_habit" TEXT,
    "is_deciduous" BOOLEAN,
    "is_deciduous_note" TEXT,
    "reproductive_system" TEXT,
    "flowering_period" "Month"[],
    "fruiting_period" "Month"[],

    CONSTRAINT "plant_morphology_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plant_ecology_distribution" (
    "id" SERIAL NOT NULL,
    "habitat" TEXT,
    "plant_origins" TEXT,
    "global_range" TEXT,
    "china_range" TEXT,
    "endemic" TEXT,
    "plant_id" INTEGER NOT NULL,

    CONSTRAINT "plant_ecology_distribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plant_conservation" (
    "id" SERIAL NOT NULL,
    "global_conservation_status" "GlobalConservationStatus",
    "china_conservation_status" TEXT,
    "protected_status" TEXT,
    "invasive_status" "InvasiveStatus",
    "invasive_range" TEXT,
    "plant_id" INTEGER NOT NULL,

    CONSTRAINT "plant_conservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "botanical_garden" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "botanical_garden_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicinal_properties" (
    "id" SERIAL NOT NULL,
    "pharmaceutical_name" TEXT,
    "pinyin" TEXT NOT NULL,
    "taste" "Taste"[],
    "energy_flow" "EnergyFlow"[],
    "meridians" "Meridian"[],
    "actions" TEXT,
    "pharmacological_properties" TEXT[],
    "indications" TEXT[],
    "toxicity" TEXT,
    "secondary_metabolites" TEXT,

    CONSTRAINT "medicinal_properties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "herbal_drug_background" (
    "id" SERIAL NOT NULL,
    "pinyin" TEXT NOT NULL,
    "plant_parts_used" TEXT,
    "official_status" BOOLEAN,
    "harvesting_time" "Month"[],
    "primary_processing" TEXT,
    "secondary_processing" TEXT,
    "herbal_drug_image" TEXT,
    "plant_id" INTEGER NOT NULL,
    "medicinal_property_id" INTEGER NOT NULL,

    CONSTRAINT "herbal_drug_background_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sourcing_background" (
    "id" SERIAL NOT NULL,
    "herbal_drug_id" INTEGER NOT NULL,
    "cultivated" BOOLEAN,
    "cultivation_regions" TEXT,
    "wild_harvesting_regions" TEXT,
    "harvesting_practice" "HarvestingPractice"[],
    "harvesting_practice_note" TEXT,
    "daodi" BOOLEAN,
    "daodi_regions" TEXT,
    "production_regions" TEXT,

    CONSTRAINT "sourcing_background_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ethnobotany" (
    "id" SERIAL NOT NULL,
    "plant_id" INTEGER NOT NULL,
    "folk_medicinal_uses" TEXT,
    "other_cultural_uses" TEXT[],
    "references" TEXT,

    CONSTRAINT "ethnobotany_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PlantMorphologyToPlantNomenclature" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PlantMorphologyToPlantNomenclature_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_BotanicalGardenToPlantNomenclature" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_BotanicalGardenToPlantNomenclature_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "plant_nomenclature_scientific_name_key" ON "plant_nomenclature"("scientific_name");

-- CreateIndex
CREATE UNIQUE INDEX "plant_nomenclature_pinyin_key" ON "plant_nomenclature"("pinyin");

-- CreateIndex
CREATE UNIQUE INDEX "plant_nomenclature_chinese_name_key" ON "plant_nomenclature"("chinese_name");

-- CreateIndex
CREATE UNIQUE INDEX "plant_ecology_distribution_plant_id_key" ON "plant_ecology_distribution"("plant_id");

-- CreateIndex
CREATE UNIQUE INDEX "plant_conservation_plant_id_key" ON "plant_conservation"("plant_id");

-- CreateIndex
CREATE UNIQUE INDEX "medicinal_properties_pharmaceutical_name_key" ON "medicinal_properties"("pharmaceutical_name");

-- CreateIndex
CREATE UNIQUE INDEX "medicinal_properties_pinyin_key" ON "medicinal_properties"("pinyin");

-- CreateIndex
CREATE UNIQUE INDEX "herbal_drug_background_plant_id_medicinal_property_id_key" ON "herbal_drug_background"("plant_id", "medicinal_property_id");

-- CreateIndex
CREATE UNIQUE INDEX "sourcing_background_herbal_drug_id_key" ON "sourcing_background"("herbal_drug_id");

-- CreateIndex
CREATE UNIQUE INDEX "ethnobotany_plant_id_key" ON "ethnobotany"("plant_id");

-- CreateIndex
CREATE INDEX "_PlantMorphologyToPlantNomenclature_B_index" ON "_PlantMorphologyToPlantNomenclature"("B");

-- CreateIndex
CREATE INDEX "_BotanicalGardenToPlantNomenclature_B_index" ON "_BotanicalGardenToPlantNomenclature"("B");

-- AddForeignKey
ALTER TABLE "plant_nomenclature" ADD CONSTRAINT "plant_nomenclature_taxonomy_id_fkey" FOREIGN KEY ("taxonomy_id") REFERENCES "plant_taxonomy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plant_synonym" ADD CONSTRAINT "plant_synonym_plant_id_fkey" FOREIGN KEY ("plant_id") REFERENCES "plant_nomenclature"("internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plant_ecology_distribution" ADD CONSTRAINT "plant_ecology_distribution_plant_id_fkey" FOREIGN KEY ("plant_id") REFERENCES "plant_nomenclature"("internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plant_conservation" ADD CONSTRAINT "plant_conservation_plant_id_fkey" FOREIGN KEY ("plant_id") REFERENCES "plant_nomenclature"("internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "herbal_drug_background" ADD CONSTRAINT "herbal_drug_background_plant_id_fkey" FOREIGN KEY ("plant_id") REFERENCES "plant_nomenclature"("internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "herbal_drug_background" ADD CONSTRAINT "herbal_drug_background_medicinal_property_id_fkey" FOREIGN KEY ("medicinal_property_id") REFERENCES "medicinal_properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sourcing_background" ADD CONSTRAINT "sourcing_background_herbal_drug_id_fkey" FOREIGN KEY ("herbal_drug_id") REFERENCES "herbal_drug_background"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ethnobotany" ADD CONSTRAINT "ethnobotany_plant_id_fkey" FOREIGN KEY ("plant_id") REFERENCES "plant_nomenclature"("internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlantMorphologyToPlantNomenclature" ADD CONSTRAINT "_PlantMorphologyToPlantNomenclature_A_fkey" FOREIGN KEY ("A") REFERENCES "plant_morphology"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlantMorphologyToPlantNomenclature" ADD CONSTRAINT "_PlantMorphologyToPlantNomenclature_B_fkey" FOREIGN KEY ("B") REFERENCES "plant_nomenclature"("internal_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BotanicalGardenToPlantNomenclature" ADD CONSTRAINT "_BotanicalGardenToPlantNomenclature_A_fkey" FOREIGN KEY ("A") REFERENCES "botanical_garden"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BotanicalGardenToPlantNomenclature" ADD CONSTRAINT "_BotanicalGardenToPlantNomenclature_B_fkey" FOREIGN KEY ("B") REFERENCES "plant_nomenclature"("internal_id") ON DELETE CASCADE ON UPDATE CASCADE;
