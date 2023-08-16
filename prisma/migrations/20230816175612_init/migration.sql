/*
  Warnings:

  - You are about to drop the column `weather` on the `station` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "station" DROP COLUMN "weather";

-- CreateTable
CREATE TABLE "weather" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "weather" JSONB NOT NULL,
    "lastUpdated" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "weather_pkey" PRIMARY KEY ("id")
);
