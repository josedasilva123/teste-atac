import { client } from "../../database/client";
import { ICostumer, TCreateCostumerData } from "../../interfaces/costumers.interface";

export const create = async (body: TCreateCostumerData) => {
  const { name, email, phone, x, y } = body;

  const queryString = `INSERT INTO costumers(name, email, phone, x, y) 
    VALUES ($1, $2, $3, $4, $5) 
    RETURNING *;`;  

  const values = [name, email, phone, x, y];  

  const response = await client.query<ICostumer>(queryString, values);

  return response.rows[0];
};
