/*
  Warnings:

  - Added the required column `priority` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "todo" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "projectsId" INTEGER NOT NULL,
    "priority" INTEGER NOT NULL,
    CONSTRAINT "Task_projectsId_fkey" FOREIGN KEY ("projectsId") REFERENCES "Projects" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Task" ("completed", "id", "projectsId", "todo") SELECT "completed", "id", "projectsId", "todo" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
