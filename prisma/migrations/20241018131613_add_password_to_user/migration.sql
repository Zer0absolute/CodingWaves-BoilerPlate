-- Mettre à jour les lignes existantes où le mot de passe est NULL
UPDATE "User" SET "password" = 'default_hashed_password' WHERE "password" IS NULL;

-- Rendre la colonne non nullable après avoir mis à jour les valeurs NULL
ALTER TABLE "User" ALTER COLUMN "password" SET NOT NULL;