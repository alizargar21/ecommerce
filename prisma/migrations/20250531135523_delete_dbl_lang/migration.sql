/*
  Warnings:

  - You are about to drop the `ProductCategoryTranslation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductTranslation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductCategoryTranslation" DROP CONSTRAINT "ProductCategoryTranslation_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "ProductTranslation" DROP CONSTRAINT "ProductTranslation_productId_fkey";

-- DropTable
DROP TABLE "ProductCategoryTranslation";

-- DropTable
DROP TABLE "ProductTranslation";
