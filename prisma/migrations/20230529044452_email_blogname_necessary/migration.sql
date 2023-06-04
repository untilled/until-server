/*
  Warnings:

  - Made the column `blogName` on table `Profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "blogName" SET NOT NULL;

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "email" SET NOT NULL;
