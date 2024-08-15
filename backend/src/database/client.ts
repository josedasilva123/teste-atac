import pg from "pg";
import { env } from "../env";
const { Client } = pg;

export const client = new Client({
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  host: env.DB_HOST,
  port: Number(env.DB_PORT),
  database: env.DB_DATABASE,
});

export const databaseConnect = async () => {
  try {
    await client.connect();
    console.log("Database sucessfully connected.");
    console.log(`Database: ${env.DB_DATABASE}. Port: ${env.DB_PORT}.`);
  } catch (error) {
    console.log("There was an error in database connection:");
    console.log(error);
  }
};
