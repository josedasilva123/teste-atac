CREATE DATABASE atac_teste;

CREATE TABLE costumers (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL
);