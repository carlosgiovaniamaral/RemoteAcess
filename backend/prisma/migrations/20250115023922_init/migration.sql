-- CreateTable
CREATE TABLE `Computer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ip` VARCHAR(191) NOT NULL,
    `nameComputer` VARCHAR(191) NOT NULL,
    `nameUser` VARCHAR(191) NOT NULL,
    `anydeskId` VARCHAR(191) NOT NULL,
    `setor` VARCHAR(191) NOT NULL,
    `ramal` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
