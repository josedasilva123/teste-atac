import { client } from "../../database/client";
import {
  ICostumer,
  ICostumerSearchParams,
} from "../../interfaces/costumers.interface";

export const getMany = async (params: ICostumerSearchParams = {}) => {
  let queryString = "SELECT id, name, email, phone FROM costumers";
  let values: string[] = [];

  if (params.name) {
    queryString = queryString + " WHERE name ILIKE $1";
    values.push(`%${params.name}%`);
  }

  queryString = queryString + ";";

  const response = await client.query<ICostumer>(queryString, values);

  return response.rows;
};
