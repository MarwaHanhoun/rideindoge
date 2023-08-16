/*
  Warnings:

  - You are about to drop the `weather` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `weather` to the `station` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "station" ADD COLUMN     "weather" JSONB NOT NULL;

-- DropTable
DROP TABLE "weather";
