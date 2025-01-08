-- CreateTable
CREATE TABLE "Computer" (
    "id" SERIAL NOT NULL,
    "ip" TEXT NOT NULL,
    "nameComputer" TEXT NOT NULL,
    "nameUser" TEXT NOT NULL,
    "anydeskId" TEXT NOT NULL,
    "setor" TEXT NOT NULL,
    "ramal" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Computer_pkey" PRIMARY KEY ("id")
);
