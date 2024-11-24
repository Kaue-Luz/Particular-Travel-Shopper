/*
  Warnings:

  - Added the required column `end_latitude` to the `Ride` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end_longitude` to the `Ride` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_latitude` to the `Ride` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_longitude` to the `Ride` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ride" ADD COLUMN     "end_latitude" TEXT NOT NULL,
ADD COLUMN     "end_longitude" TEXT NOT NULL,
ADD COLUMN     "start_latitude" TEXT NOT NULL,
ADD COLUMN     "start_longitude" TEXT NOT NULL;
