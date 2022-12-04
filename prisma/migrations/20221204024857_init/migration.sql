-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "todo" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "projectsId" INTEGER NOT NULL,
    "priority" INTEGER NOT NULL,
    CONSTRAINT "Task_projectsId_fkey" FOREIGN KEY ("projectsId") REFERENCES "Projects" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Task" ("completed", "id", "priority", "projectsId", "todo") SELECT "completed", "id", "priority", "projectsId", "todo" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
