import { client } from "../../database/client";
import { ICostumer, TCreateCostumerData } from "../../interfaces/costumers.interface";

export const create = async (body: TCreateCostumerData) => {
  const { name, email, phone } = body;

  const queryString = `INSERT INTO costumers(name, email, phone) 
    VALUES ($1, $2, $3) 
    RETURNING *;`;  

  const values = [name, email, phone];  

  const response = await client.query<ICostumer>(queryString, values);

  return response.rows[0];
};
