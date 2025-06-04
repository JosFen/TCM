-- DropIndex
DROP INDEX "medicinal_properties_pinyin_key";

-- AlterTable
ALTER TABLE "medicinal_properties" ALTER COLUMN "pinyin" DROP NOT NULL;
