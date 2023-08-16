/*
  Warnings:

  - Added the required column `lastUpdated` to the `Station` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Station" ADD COLUMN     "lastUpdated" TIMESTAMP(3) NOT NULL;
