-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Projects" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url_by_title" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Projects_id_fkey" FOREIGN KEY ("id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Projects" ("id", "title", "url_by_title", "userId") SELECT "id", "title", "url_by_title", "userId" FROM "Projects";
DROP TABLE "Projects";
ALTER TABLE "new_Projects" RENAME TO "Projects";
CREATE UNIQUE INDEX "Projects_url_by_title_key" ON "Projects"("url_by_title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
