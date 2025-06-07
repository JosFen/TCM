/*
  Warnings:

  - You are about to drop the column `medicinal_property_id` on the `herbal_drug_background` table. All the data in the column will be lost.
  - You are about to drop the column `plant_id` on the `herbal_drug_background` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[plant_scientific_name,pharmaceutical_name]` on the table `herbal_drug_background` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pharmaceutical_name` to the `herbal_drug_background` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plant_scientific_name` to the `herbal_drug_background` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "herbal_drug_background" DROP CONSTRAINT "herbal_drug_background_medicinal_property_id_fkey";

-- DropForeignKey
ALTER TABLE "herbal_drug_background" DROP CONSTRAINT "herbal_drug_background_plant_id_fkey";

-- DropIndex
DROP INDEX "herbal_drug_background_plant_id_medicinal_property_id_key";

-- AlterTable
ALTER TABLE "herbal_drug_background" DROP COLUMN "medicinal_property_id",
DROP COLUMN "plant_id",
ADD COLUMN     "pharmaceutical_name" TEXT NOT NULL,
ADD COLUMN     "plant_scientific_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "herbal_drug_background_plant_scientific_name_pharmaceutical_key" ON "herbal_drug_background"("plant_scientific_name", "pharmaceutical_name");

-- AddForeignKey
ALTER TABLE "herbal_drug_background" ADD CONSTRAINT "herbal_drug_background_plant_scientific_name_fkey" FOREIGN KEY ("plant_scientific_name") REFERENCES "plant_nomenclature"("scientific_name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "herbal_drug_background" ADD CONSTRAINT "herbal_drug_background_pharmaceutical_name_fkey" FOREIGN KEY ("pharmaceutical_name") REFERENCES "medicinal_properties"("pharmaceutical_name") ON DELETE RESTRICT ON UPDATE CASCADE;
