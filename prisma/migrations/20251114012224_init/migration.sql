-- CreateTable
CREATE TABLE "Usuario" (
    "email" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "data" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Jogo" (
    "id_jogo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "classificacao" TEXT
);

-- CreateTable
CREATE TABLE "Tag" (
    "id_tags" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desc" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id_categoria" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "autor_id" TEXT NOT NULL,
    "jogoId" INTEGER NOT NULL,
    "estrelas" INTEGER NOT NULL,
    CONSTRAINT "Avaliacao_autor_id_fkey" FOREIGN KEY ("autor_id") REFERENCES "Usuario" ("email") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "Jogo" ("id_jogo") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_JogoToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_JogoToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Jogo" ("id_jogo") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_JogoToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag" ("id_tags") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_JogoToUsuario" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_JogoToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "Jogo" ("id_jogo") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_JogoToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "Usuario" ("email") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CategoriaToJogo" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CategoriaToJogo_A_fkey" FOREIGN KEY ("A") REFERENCES "Categoria" ("id_categoria") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CategoriaToJogo_B_fkey" FOREIGN KEY ("B") REFERENCES "Jogo" ("id_jogo") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Jogo_nome_key" ON "Jogo"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "_JogoToTag_AB_unique" ON "_JogoToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_JogoToTag_B_index" ON "_JogoToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_JogoToUsuario_AB_unique" ON "_JogoToUsuario"("A", "B");

-- CreateIndex
CREATE INDEX "_JogoToUsuario_B_index" ON "_JogoToUsuario"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoriaToJogo_AB_unique" ON "_CategoriaToJogo"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoriaToJogo_B_index" ON "_CategoriaToJogo"("B");
