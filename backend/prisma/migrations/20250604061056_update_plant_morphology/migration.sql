-- AlterTable
ALTER TABLE "plant_morphology" ADD COLUMN     "flowering_period_note" TEXT,
ADD COLUMN     "fruiting_period_note" TEXT;

-- CreateIndex
CREATE INDEX "plant_synonym_plant_id_idx" ON "plant_synonym"("plant_id");
