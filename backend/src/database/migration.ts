import "dotenv/config";
import { Pool } from "pg";
import { env } from "../env";

export const migrate = async () => {
  try {
    console.log("--Migration started--");
    const pool = new Pool({
      user: env.DB_USER,
      password: env.DB_PASSWORD,
      host: env.DB_HOST,
      port: Number(env.DB_PORT),
      database: env.DB_DATABASE,
    });

    const client = await pool.connect();
    await client.query(`CREATE TABLE IF NOT EXISTS costumers (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR(50) NOT NULL,
        "email" VARCHAR(100) NOT NULL,
        "phone" VARCHAR(20) NOT NULL,
        "x" INTEGER NOT NULL,
        "y" INTEGER NOT NULL
    );`);
    client.release();
    console.log("--Migration sucessfully--");
  } catch (error) {
    console.log("--Migration failed--");
    console.log(error);
  }
};

migrate();
