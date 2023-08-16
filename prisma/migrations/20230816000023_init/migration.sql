/*
  Warnings:

  - You are about to drop the `Offset` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Station` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Offset";

-- DropTable
DROP TABLE "Station";

-- CreateTable
CREATE TABLE "station" (
    "id" SERIAL NOT NULL,
    "stationId" INTEGER NOT NULL,
    "kioskId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "properties" JSONB NOT NULL,
    "weather" JSONB NOT NULL,
    "lastUpdated" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "station_pkey" PRIMARY KEY ("id")
);
